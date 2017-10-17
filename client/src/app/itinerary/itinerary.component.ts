import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css']
})
export class ItineraryComponent implements OnInit {
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
  };
  constructor(private router: Router) {

  }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 40000);
  }

  goToMenu() {
    window.history.back();
  }

}
