import {Component, OnInit} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {ProductModel} from '../Models/product';
import {MdDialog} from '@angular/material';
import {CartInscriptionComponent} from '../cart-inscription/cart-inscription.component';
import {InscriptionComponent} from '../inscription/inscription.component';
import {DataBusService} from '../services/data-bus.service';

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
              public dialog: MdDialog, private dataBus: DataBusService) {
  }

  ngOnInit() {
    this.cartProducts = JSON.parse(window.localStorage.getItem('cartItems'));
    this.numberOfProducts = 0;
    this.cartProducts.forEach((product: ProductModel) => {
      this.numberOfProducts += product.quantity;
    });
    window.localStorage.setItem('cartQuantity', JSON.stringify(this.numberOfProducts));
    this.dataBus.updateCartQuantity(this.numberOfProducts);
    this.totalPrice = parseInt(window.localStorage.getItem('cartPrice'), 10);
  }

  decreaseQty = (product: ProductModel) => {
    const productIdx = this.cartProducts.indexOf(product);
    this.cartProducts[productIdx].quantity--;
    this.numberOfProducts--;
    if (this.totalPrice >= product.price) {
      this.totalPrice -= product.price;
      window.localStorage.setItem('cartItems', JSON.stringify(this.cartProducts));
      this.writeCartValueInLocalStorage();
      this.updateCartQuantity();
    }
  }

  writeCartValueInLocalStorage() {
    const strPrice = JSON.stringify(this.totalPrice);
    window.localStorage.setItem('cartPrice', strPrice);
  }

  increaseQty = (product: ProductModel) => {
    const productIdx = this.cartProducts.indexOf(product);
    this.cartProducts[productIdx].quantity++;
    this.numberOfProducts++;
    this.totalPrice += product.price;
    this.updateCartQuantity();
    window.localStorage.setItem('cartItems', JSON.stringify(this.cartProducts));
    this.writeCartValueInLocalStorage();
  }

  updateCartQuantity() {
    this.dataBus.updateCartQuantity(this.numberOfProducts);
    window.localStorage.setItem('cartQuantity', JSON.stringify(this.numberOfProducts));
  }

  existentProds = () => {
    return this.cartProducts.filter(prod => prod.quantity > 0);
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
