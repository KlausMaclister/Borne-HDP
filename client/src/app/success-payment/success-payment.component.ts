import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-success-payment',
  templateUrl: './success-payment.component.html',
  styleUrls: ['./success-payment.component.css']
})
export class SuccessPaymentComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    setTimeout(() => {
      window.localStorage.clear();
      this.router.navigate(['/']);
    }, 15000);
  }
}
