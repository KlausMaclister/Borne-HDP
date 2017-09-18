import {Component} from '@angular/core';
import {DataBusService} from './services/data-bus.service';
import {MdDialog} from '@angular/material';
import {CartComponent} from './cart/cart.component';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  dataIsLoading = false;
  cartItems: number;

  constructor(private dataBus: DataBusService, public dialog: MdDialog, private router: Router) {
    this.dataBus.dataLoadingStatus.subscribe((res) => {
      this.dataIsLoading = res;
    });
    this.dataBus.numberOfItemsInCart.subscribe((number) => {
      const numberOfItemsFromLS = JSON.parse(window.localStorage.getItem('numberOfItemsInCart'));
      this.cartItems = (numberOfItemsFromLS === 0) ? number : numberOfItemsFromLS;
    });
  }

  showCart() {
    const dialogRef = this.dialog.open(CartComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
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
