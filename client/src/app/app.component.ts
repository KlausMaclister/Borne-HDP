import {Component} from '@angular/core';
import {DataBusService} from './services/data-bus.service';
import {MdDialog} from '@angular/material';
import {CartComponent} from './cart/cart.component';
import {NavigationEnd, Router} from '@angular/router';
import {ProductModel} from './Models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  dataIsLoading = false;
  paymentPage = false;
  numberOfCartItems: number;
  currentUrl: string;
  pricesUrls = ['/details'];

  constructor(private dataBus: DataBusService, public dialog: MdDialog, private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        if (this.currentUrl === '/') {
          console.log('clezarrr');
        }
        this.paymentPage = (this.pricesUrls.indexOf(this.currentUrl) !== -1) ? true : false;
      }
    });
    this.dataBus.dataLoadingStatus.subscribe((res) => {
      this.dataIsLoading = res;
    });
    this.dataBus.cartQuantity.subscribe((quantity: number) => {
      this.numberOfCartItems = quantity || this.getNumberOfItemsFromLS();
      console.log(this.numberOfCartItems);
    });
  }

  goBack() {
    this.router.navigate(['/']);
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
