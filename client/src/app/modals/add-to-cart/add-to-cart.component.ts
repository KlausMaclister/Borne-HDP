import { Component, OnInit, Input } from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  @Input() title: string;
  constructor(public dialogRef: MdDialogRef<AddToCartComponent>) {
  }
  ngOnInit() {
  }

}
