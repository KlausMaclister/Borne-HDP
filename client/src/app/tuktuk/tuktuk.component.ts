import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-tuktuk',
  templateUrl: './tuktuk.component.html',
  styleUrls: ['./tuktuk.component.css']
})
export class TuktukComponent implements OnInit {
  openingHours: number[] = [];
  ticketId: number;
  numberOfTravelers: number;
  selectedHour: number;
  travelers: number[] = [];


  constructor(private router: Router) {
  }

  ngOnInit() {
    this.populateHoursArray();
    this.populateTravelers();
  }

  populateHoursArray = () => {
    for (let i = 9; i < 19; i++) {
      this.openingHours.push(i);
    }
  }
  populateTravelers = () => {
    for (let i = 1; i < 7; i++) {
      this.travelers.push(i);
    }
  }

  goBack() {
    this.router.navigate(['/presentation']);
  }

  generateTicketId = () => {
    this.ticketId = Math.floor(1000 + Math.random() * 9000);
  }
  bookTuk = () => {
    this.generateTicketId();
  }
}
