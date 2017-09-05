import {Component, AfterContentInit} from '@angular/core';
import {Countries} from './countries';
import {PaymentService} from '../services/payment.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
  providers: [PaymentService]
})
export class InscriptionComponent implements AfterContentInit {

  amount = 500;
  stripe: any;
  firstName: string;
  lastName: string;
  passportNumber: string;
  email: string;
  country: string;
  card: any;
  submitted = false;
  allCountries = Countries.countryList;

  constructor(private paymentSrv: PaymentService) {
  }

  ngAfterContentInit() {
    this.displayPayment();
  }

  postPayment = (token) => {
    console.log('posting');
    this.paymentSrv.postPayment(this.amount, token, 'payment for test').subscribe((d) => console.log(d));
  }

  handlePayment() {
    this.submitted = true;
    this.submitPayment();
    this.newLead();
  }

  submitPayment = async () => {
    const {token, error} = await this.stripe.createToken(this.card);
    const errorField = document.getElementById('card-errors');
    if (error) {
      errorField.textContent = error.message;
    } else {
      console.log(token);
      this.postPayment(token.id);
    }
  }

  displayPayment = () => {
    this.stripe = Stripe(environment.stripeKey);
    const elements = this.stripe.elements();
    const style = {
      base: {
        fontSize: '16px',
        lineHeight: '24px'
      },
    };
    this.card = elements.create('card', {style});
    this.card.addEventListener('change', ({error}) => {
      const displayError = document.getElementById('card-errors');
      if (error) {
        displayError.textContent = error.message;
      } else {
        displayError.textContent = '';
      }
    });
    const anchor = document.getElementById('card-element');
    this.card.mount(anchor);
  }

  newLead = () => {
    const lead = {
      'firstName': this.firstName,
      'lastName': this.lastName,
      'passeport': this.passportNumber,
      'country': this.country
    };
    console.log(lead);
    this.paymentSrv.createLead(lead).subscribe((res) => {
      console.log(res);
    });
  }

}
