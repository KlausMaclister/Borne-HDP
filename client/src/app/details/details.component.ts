import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../Models/product';
import {DataBusService} from '../services/data-bus.service';
import {FetcherService} from '../services/fetcher.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [FetcherService]
})

export class DetailsComponent implements OnInit {

  public product: ProductModel;
  public prices: Array<any>;
  public contentHasLoaded: boolean;
  public brand: string;
  public multipleVolumes: boolean;
  public selectedQty: number;
  quantities: number[];
  selectedVolume: number;
  cartProducts: ProductModel[];

  constructor(private dataBus: DataBusService, private api: FetcherService, private router: Router) {
    this.contentHasLoaded = false;
    this.prices = [];
    this.quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.selectedQty = 1;
  }

  ngOnInit() {
    const localStorageUrl = window.localStorage.getItem('currentProductUrl');
    this.dataBus.currentProduct.subscribe((res) => {
      const UrlToCall = (localStorageUrl !== 'undefined' ) ? localStorageUrl : res.url;
      this.api.getProductDetails(UrlToCall).subscribe((product) => {
        this.product = product[0];
        this.product.dynamicPrice = parseInt(this.product.price, 0) * this.selectedQty;
        product.forEach((prod) => {
          const decimalPrice = prod.price.replace(',', '.');
          const PriceObj = {'price': parseFloat(decimalPrice), 'label': prod.label};
          this.prices.push(PriceObj);
        });
        this.selectedVolume = this.prices[0].price;
        this.multipleVolumes = (this.prices.length > 1) ? true : false;
        this.contentHasLoaded = true;
      });
    });
    this.dataBus.cartProducts.subscribe((res) => {
      this.cartProducts = res;
    });
  }

  updateValue(qty: number) {
    this.product.dynamicPrice = parseFloat(this.product.price) * qty;
  }

  updateVolumePrice(price: number) {
    this.product.dynamicPrice = price * this.selectedQty;
    this.product.price = price.toString();
  }

  goToSignUp = () => {
    const selectedProduct = {
      'product': this.product.label,
      'quantity': this.selectedQty,
      'price': this.product.price
    };
    const jsonified = JSON.stringify(selectedProduct);
    window.localStorage.setItem('selectedProduct', jsonified);
    this.router.navigate(['/inscription']);
  }

  addProductToCart = () => {
    const product: ProductModel = {
      label: this.product.label,
      quantity: this.selectedQty,
      price: this.product.price,
      image: this.product.productBigImage
    };
    let numberOfItemsInCart = 0;
    for (let i = 0; i < product.quantity; i++) {
      numberOfItemsInCart ++;
    };
    this.cartProducts.push(product);
    this.dataBus.setNewCartProduct(this.cartProducts);
    this.dataBus.setNumberOfItemsInCart(numberOfItemsInCart);
    const strCart = JSON.stringify(this.cartProducts);
    window.localStorage.setItem('cart', strCart);
    window.localStorage.setItem('numberOfItemsInCart', JSON.stringify(numberOfItemsInCart));
  }

}
