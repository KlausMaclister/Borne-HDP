import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../Models/product';
import {DataBusService} from '../services/data-bus.service';
import {FetcherService} from '../services/fetcher.service';
import {MdDialog} from '@angular/material';
import {InscriptionComponent} from '../inscription/inscription.component';
import {CartInscriptionComponent} from '../cart-inscription/cart-inscription.component';
import {TranslatorService} from '../services/translator.service';
import {AddToCartComponent} from '../modals/add-to-cart/add-to-cart.component';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [FetcherService, TranslatorService]
})

export class DetailsComponent implements OnInit {
  mode = 'indeterminate';
  spinnerColor = 'accent';
  public product: ProductModel;
  public prices: Array<any>;
  public contentHasLoaded: boolean;
  public brand: string;
  public multipleVolumes: boolean;
  public selectedQty: number;
  quantities: number[];
  selectedVolume: number;
  cartProducts: ProductModel[];

  constructor(private dataBus: DataBusService,
              private api: FetcherService,
              public dialog: MdDialog,
              private translator: TranslatorService) {
    this.contentHasLoaded = false;
    this.prices = [];
    this.quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.selectedQty = 1;
  }

  ngOnInit() {
    this.dataBus.currentProduct.subscribe((res) => {
      this.api.getProductDetails(res.url).subscribe((product) => {
        this.product = product[0];
        this.product.dynamicPrice = this.product.price * this.selectedQty;
        this.product.regularPrice = this.product.price;
        product.forEach((prod: ProductModel) => {
          console.log(prod);
          const PriceObj = {'price': prod.price, 'label': prod.label};
          this.prices.push(PriceObj);
          console.log(PriceObj);
        });
        this.selectedVolume = this.prices[0].price;
        this.multipleVolumes = (this.prices.length > 1) ? true : false;
        this.contentHasLoaded = true;
      });
    });
    this.dataBus.cartProducts.subscribe((res) => {
      this.cartProducts = res;
      console.log(res);
    });
  }

  updateValue(qty: number) {
    this.product.dynamicPrice = this.product.dynamicPrice * qty;
    this.product.regularPrice = this.product.dynamicPrice;
  }

  updateVolumePrice(price: number) {
    this.product.dynamicPrice = price * this.selectedQty;
    this.product.price = price;
    this.product.regularPrice = price;
  }

  goToSignUp = () => {
    const selectedProduct = {
      'product': this.product.label,
      'quantity': this.selectedQty,
      'dynamicPrice': this.product.dynamicPrice,
      'regularPrice': this.product.regularPrice
    };
    const dialogRef = this.dialog.open(InscriptionComponent, {
      data: {product: selectedProduct},
      disableClose: true,
      width: '60%'
    });

  }

  addProductToCart = () => {
    this.dialog.open(AddToCartComponent, {data: {title: this.product.label}});
    const product: ProductModel = {
      label: this.product.label,
      quantity: this.selectedQty,
      price: this.product.price,
      image: this.product.productBigImage
    };
    let numberOfItemsInCart = 0;
    for (let i = 0; i < product.quantity; i++) {
      numberOfItemsInCart++;
    }
    this.cartProducts.push(product);
    this.dataBus.setNewCartProduct(this.cartProducts);
  }

  bookInShop() {
    const selectedProduct = {
      'product': this.product.label,
      'quantity': this.selectedQty,
      'dynamicPrice': this.product.dynamicPrice,
      'regularPrice': this.product.regularPrice
    };
    const dialogRef = this.dialog.open(CartInscriptionComponent, {
      data: {product: selectedProduct},
      disableClose: true,
      width: '60%'
    });
  }

}
