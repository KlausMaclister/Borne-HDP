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
  selectedHour: number;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.populateHoursArray();
  }

  populateHoursArray = () => {
    for (let i = 9; i < 19; i++) {
      this.openingHours.push(i);
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
