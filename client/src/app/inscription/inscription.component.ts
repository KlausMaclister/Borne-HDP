import {Component, AfterContentInit, Inject} from '@angular/core';
import {Countries} from './countries';
import {PaymentService} from '../services/payment.service';
import {environment} from '../../environments/environment';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {AreaCodes} from '../Models/phone.areCode';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
  providers: [PaymentService]
})
export class InscriptionComponent implements AfterContentInit {
  stripe: any;
  firstName: string;
  lastName: string;
  passportNumber: string;
  email: string;
  dob: string;
  phone: string;
  country: string;
  card: any;
  submitted = false;
  areaCode: string;
  isNotEuropeanCountry: boolean;
  notPaying = true;
  HN1: string;
  HN2: string;
  allCountries = Countries.countryList;
  euCountries = Countries.euCountries;
  helperName: string;

  constructor(private paymentSrv: PaymentService,
              public dialogRef: MdDialogRef<InscriptionComponent>,
              @Inject(MD_DIALOG_DATA) public data: any,
              private router: Router) {
    this.data.product.dynamicPrice = this.data.product.dynamicPrice ||
      parseInt(window.localStorage.getItem('cartPrice'), 10);
  }

  ngAfterContentInit() {
    this.displayPayment();
  }

  isEligibleForRefund() {
    return (!this.isNotEuropeanCountry && this.data.product.dynamicPrice > 175);
  }

  postPayment = (token) => {
    const label = `payment from ${this.lastName} ${this.firstName}`;
    const price = Math.floor(this.data.product.dynamicPrice * 100);
    this.paymentSrv.postPayment(price, token, label)
      .subscribe((payment) => {
        this.notPaying = !this.notPaying;
        if (payment.status === 200) {
          this.dialogRef.close();
          this.router.navigate(['/valid_payment']);
        } else {
          alert('your payment could not be made, please try again');
        }
      }, (error) => {
        alert(error);
        this.notPaying = !this.notPaying;
      });
  }


  handlePayment() {
    this.submitted = true;
    // this.router.navigate(['/valid_payment']);
    // this.submitPayment().then((status) => console.log(status));
    //  this.newLead();
  }

  submitPayment = async () => {
    this.notPaying = !this.notPaying;
    const {token, error} = await this.stripe.createToken(this.card);
    const errorField = document.getElementById('card-errors');
    if (error) {
      this.notPaying = !this.notPaying;
      errorField.textContent = error.message;
    } else {
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
      'country': this.country,
      'email': this.email,
      'areaCode': this.areaCode,
      'helperName': this.HN1 + this.HN2,
      'phone': this.phone,
      'amount_spent': this.data.product.dynamicPrice
    };
    this.paymentSrv.createLead(lead).subscribe((res) => {
      console.log(res);
    });
  }
  checkContinent = (country: string) => {
    console.log(this.data.product);
    this.isNotEuropeanCountry = this.euCountries.indexOf(country) > 1;
  }
}
