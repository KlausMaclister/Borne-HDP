import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataBusService} from '../services/data-bus.service';

@Component({
  selector: 'app-printing',
  templateUrl: './printing.component.html',
  styleUrls: ['./printing.component.css']
})
export class PrintingComponent implements OnInit {

  firstName: any;
  lastName: any;
  travelers: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dataBus: DataBusService) {
  }

  ngOnInit() {

    this.route
      .queryParams
      .subscribe(params => {
        this.firstName = params['firstName'] || '';
        this.lastName = params['name'] || '';
        this.travelers = params['persons'] || '';
      });
    setTimeout(() => {
      window.localStorage.clear();
      this.dataBus.updateCartQuantity(0);
      this.router.navigate(['/']);
    }, 15000);
  }
}
