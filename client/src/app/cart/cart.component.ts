import {Component, OnInit} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {ProductModel} from '../Models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: ProductModel[];
  numberOfProducts: number;
  totalPrice: number;

  constructor(public dialogRef: MdDialogRef<CartComponent>) {
  }

  ngOnInit() {
    const cartStr = window.localStorage.getItem('cart');
    this.cartProducts = JSON.parse(cartStr);
    console.log(this.cartProducts);
    const AllProducts = this.cartProducts.map((product: ProductModel) => {
      const price = product.quantity * product.price;
      this.totalPrice += price;
      return product.quantity;
    });
    AllProducts.forEach((quantity: number) => {
      this.numberOfProducts += quantity;
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

}
