import {Component, OnInit} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {ProductModel} from '../Models/product';
import {MdDialog} from '@angular/material';
import {CartInscriptionComponent} from '../cart-inscription/cart-inscription.component';
import {InscriptionComponent} from '../inscription/inscription.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: ProductModel[];
  numberOfProducts: number;
  totalPrice: number;

  constructor(public dialogRef: MdDialogRef<CartComponent>,
              public dialog: MdDialog) {
  }

  ngOnInit() {
    const cartStr = window.localStorage.getItem('cart');
    if (cartStr) {
      this.cartProducts = JSON.parse(cartStr);
      console.log(this.cartProducts);
      const AllProducts = this.cartProducts.map((product: ProductModel) => {
        const price = product.quantity * parseInt(product.price, 0);
        console.log(price);
        this.totalPrice += price;
        console.log(this.totalPrice);
        return product.quantity;
      });
      AllProducts.forEach((quantity: number) => {
        this.numberOfProducts += quantity;
      });
    }
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
}
