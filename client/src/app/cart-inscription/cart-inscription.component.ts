import {Component, OnInit, Inject} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';
import {Countries} from '../inscription/countries';
import {Router} from '@angular/router';
import {MailerService} from '../services/mailer.service';

@Component({
  selector: 'app-cart-inscription',
  templateUrl: './cart-inscription.component.html',
  styleUrls: ['./cart-inscription.component.css'],
  providers: [MailerService]
})
export class CartInscriptionComponent implements OnInit {
  firstName: string;
  lastName: string;
  passportNumber: string;
  email: string;
  country: string;
  isNotEuropeanCountry: boolean;
  allCountries = Countries.countryList;
  euCountries = Countries.euCountries;
  ticketId: number;

  constructor(public dialogRef: MdDialogRef<CartInscriptionComponent>,
              @Inject(MD_DIALOG_DATA) public data: any,
              private router: Router,
              private mailer: MailerService) {
  }

  ngOnInit() {
  }

  checkContinent = (country: string) => {
    this.isNotEuropeanCountry = this.euCountries.indexOf(country) > 1;
  }

  confirm() {
    this.generateTicketId();
    this.sendEmail();
    //this.router.navigate(['confirmCart'], {queryParams: {ticketId: this.ticketId}});
  }

  sendEmail() {
    const title = `New order number : ${this.ticketId}`;
    const cart = JSON.parse(localStorage.getItem('cart'));
    const emailBody = {
      'firstName': this.firstName,
      'lastName': this.lastName,
      'email': this.email,
      'passeport': this.passportNumber,
      'nationality': this.country,
      'cart': cart
    };
    const mail = {title, emailBody};
    console.log(mail);
    this.mailer.sendEmail(title, emailBody);
  }

  generateTicketId = () => {
    this.ticketId = Math.floor(1000 + Math.random() * 9000);
  }
}
