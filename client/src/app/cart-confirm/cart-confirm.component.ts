import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart-confirm',
  templateUrl: './cart-confirm.component.html',
  styleUrls: ['./cart-confirm.component.css']
})
export class CartConfirmComponent implements OnInit {

  ticketId: number;
  constructor(private router: Router) {
  }
  ngOnInit() {
    this.generateTicketId();
  }
  generateTicketId = () => {
    this.ticketId = Math.floor(1000 + Math.random() * 9000);
  }
  goBackToMenu() {
    this.router.navigate(['/']);
  }
  seeItinerary() {
    this.router.navigate(['/itinerary']);
  }

}
