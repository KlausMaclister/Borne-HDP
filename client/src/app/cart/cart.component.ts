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

  constructor(public dialogRef: MdDialogRef<CartComponent>) {
  }

  ngOnInit() {
    const cartStr = window.localStorage.getItem('cart');
    this.cartProducts = JSON.parse(cartStr);
    this.numberOfProducts = this.cartProducts.length;
  }




}
