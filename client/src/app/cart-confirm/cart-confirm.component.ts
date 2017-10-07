import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cart-confirm',
  templateUrl: './cart-confirm.component.html',
  styleUrls: ['./cart-confirm.component.css']
})
export class CartConfirmComponent implements OnInit, OnDestroy {

  ticketId: any;
  sub: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.activatedRoute.queryParams.subscribe(params => {
      this.ticketId = +params['ticketId'] || 0;
    });
    setTimeout(() => {
      this.goBackToMenu();
    }, 60000);
  }

  goBackToMenu() {
    window.localStorage.clear();
    this.router.navigate(['/']);
  }

  seeItinerary() {
    this.router.navigate(['/itinerary']);
  }

  gotoTuktuk() {
    this.router.navigate(['/tuktuk']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
