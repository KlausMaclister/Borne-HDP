import {Component} from '@angular/core';
import {DataBusService} from './services/data-bus.service';
import {MdDialog} from '@angular/material';
import {CartComponent} from './cart/cart.component';
import {Router} from '@angular/router';
import {ProductModel} from './Models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  dataIsLoading = false;
  numberOfCartItems: number;

  constructor(private dataBus: DataBusService, public dialog: MdDialog, private router: Router) {
    this.dataBus.dataLoadingStatus.subscribe((res) => {
      this.dataIsLoading = res;
    });
    this.dataBus.cartQuantity.subscribe((quantity: number) => {
      this.numberOfCartItems = quantity || this.getNumberOfItemsFromLS();
      console.log(this.numberOfCartItems);
    });
  }

  getNumberOfItemsFromLS() {
    let qty = 0;
    const items = JSON.parse(window.localStorage.getItem('cartItems')) || [];
    items.forEach((item: ProductModel) => {
      qty += item.quantity;
    });
    return qty;
  }

  showCart() {
    this.dialog.open(CartComponent);
  }

  isNotStoreView = () => {
    const bannedUrl = ['/language', '/presentation', '/tuktuk', '/itinerary', '/ecranVeille'];
    if (bannedUrl.indexOf(this.router.url) === -1) {
      return true;
    } else {
      return false;
    }
  }
}
