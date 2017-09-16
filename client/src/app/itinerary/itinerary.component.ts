import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css']
})
export class ItineraryComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goToMenu() {
    this.router.navigate(['/']);
  }

}
