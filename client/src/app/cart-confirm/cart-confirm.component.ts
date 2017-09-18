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
  }

  goBackToMenu() {
    this.router.navigate(['/']);
  }
  seeItinerary() {
    this.router.navigate(['/itinerary']);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
