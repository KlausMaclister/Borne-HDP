import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../Models/product';
import {DataBusService} from '../services/data-bus.service';
import {FetcherService} from '../services/fetcher.service';
import {MdDialog} from '@angular/material';
import {InscriptionComponent} from '../inscription/inscription.component';
import {CartInscriptionComponent} from '../cart-inscription/cart-inscription.component';
import {TranslatorService} from '../services/translator.service';
import {AddToCartComponent} from '../modals/add-to-cart/add-to-cart.component';
import {Router} from '@angular/router';


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
  public val: number;
  public prices: Array<any>;
  public contentHasLoaded: boolean;
  public brand: string;
  public multipleVolumes: boolean;
  public selectedQty: number;
  quantities: number[];
  selectedVolume: number;


  constructor(private dataBus: DataBusService,
              private api: FetcherService,
              public dialog: MdDialog,
              private translator: TranslatorService, private router: Router) {
    this.contentHasLoaded = false;
    this.prices = [];
    this.quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.selectedQty = 1;
  }

  ngOnInit() {
    this.dataBus.currentProduct.subscribe((res) => {
      if (res) {
        this.api.getProductDetails(res.url).subscribe((product) => {
          this.product = product[0];
          this.product.dynamicPrice = this.product.price * this.selectedQty;
          this.product.regularPrice = this.product.price;
          product.forEach((prod: ProductModel) => {
            const PriceObj = {'price': prod.price, 'label': prod.label};
            this.prices.push(PriceObj);
          });
          this.selectedVolume = this.prices[0].price;
          this.multipleVolumes = (this.prices.length > 1) ? true : false;
          this.contentHasLoaded = true;
        });
      } else {
        this.router.navigate(['/parfums']);
      }
    });
  }

  updateValue(qty: number) {
    this.product.dynamicPrice = this.product.price * qty;
    this.product.regularPrice = this.product.dynamicPrice;
    const val = this.val + this.product.dynamicPrice;
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
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    /* updating price */
    const priceFromLocalStorage = parseInt(window.localStorage.getItem('cartPrice'), 10) || 0;
    const updatedPrice = this.val + priceFromLocalStorage;
    console.log(updatedPrice);
    window.localStorage.setItem('cartPrice', JSON.stringify(updatedPrice));
    /*update products in cart*/;
    const products = JSON.parse(window.localStorage.getItem('cartItems')) || [];
    const currentProduct: ProductModel = {
      label: this.product.label,
      quantity: this.selectedQty,
      price: this.product.price,
      dynamicPrice: this.val,
      image: this.product.productBigImage
    };
    products.push(currentProduct);
    const productStr = JSON.stringify(products);
    window.localStorage.setItem('cartItems', productStr);
    /* updating the quantity in localStorage */
    const quantity = parseInt(JSON.stringify(window.localStorage.getItem('cartQuantity')), 10) || 0;
    const intQty = this.selectedQty + quantity;
    const strQty = JSON.stringify(this.selectedQty + quantity);
    window.localStorage.setItem('cartQuantity', strQty);
    this.dataBus.updateCartQuantity(intQty);
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
