import {Component, OnDestroy, OnInit} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {ProductModel} from '../Models/product';
import {MdDialog} from '@angular/material';
import {CartInscriptionComponent} from '../cart-inscription/cart-inscription.component';
import {InscriptionComponent} from '../inscription/inscription.component';
import {DataBusService} from '../services/data-bus.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  cartProducts: ProductModel[];
  numberOfProducts: number;
  totalPrice = 0;
  cartItems$: Subscription;

  constructor(public dialogRef: MdDialogRef<CartComponent>,
              public dialog: MdDialog, private dataBus: DataBusService) {
  }

  ngOnInit() {
    this.cartItems$ = this.dataBus.cartProducts.subscribe((products: ProductModel[]) => {
      console.log(products);
      this.cartProducts = products;
      products.forEach((product: ProductModel) => {
        console.log(product.price);
        console.log(typeof product.price);
        console.log(typeof this.totalPrice);
        this.totalPrice += product.price;
        console.log(this.totalPrice);
      });
    });
  }

  decreaseQty = (product: ProductModel) => {
    product.quantity--;
    this.numberOfProducts--;
    this.totalPrice -= product.price;
  }
  increaseQty = (product: ProductModel) => {
    product.quantity++;
    this.numberOfProducts++;
    this.totalPrice += product.price;
  }

  productIsDeleted = (product: ProductModel) => {
    return product.quantity < 1;
  }

  bookInShop() {
    const dialogRef = this.dialog.open(CartInscriptionComponent, {
      data: {product: this.cartProducts},
      disableClose: true,
      width: '60%'
    });
    this.dialogRef.close();
  }

  goToSignUp = () => {
    const oldArticles = localStorage.getItem('cart');
    const oldJsonified = JSON.parse(oldArticles) || [];
    console.log(oldJsonified);
    oldJsonified.push(this.cartProducts);
    const jsonified = JSON.stringify(oldJsonified);
    window.localStorage.setItem('cart', jsonified);
    const dialogRef = this.dialog.open(InscriptionComponent, {
      data: {product: this.cartProducts},
      disableClose: true,
      width: '60%'
    });
    this.dialogRef.close();

  }

  ngOnDestroy() {
    this.cartItems$.unsubscribe();
  }
}
