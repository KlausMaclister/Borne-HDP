import {Component, OnInit, Inject} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';
import {Countries} from '../inscription/countries';
import {Router} from '@angular/router';
import {MailerService} from '../services/mailer.service';
import {AreaCodes} from '../Models/phone.areCode';

@Component({
  selector: 'app-cart-inscription',
  templateUrl: './cart-inscription.component.html',
  styleUrls: ['./cart-inscription.component.css'],
  providers: [MailerService]
})
export class CartInscriptionComponent implements OnInit {
  firstName: string;
  lastName: string;
  email: string;
  areaCode: string;
  phone: string;
  ticketId: number;
  HN1: string;
  HN2: string;

  constructor(public dialogRef: MdDialogRef<CartInscriptionComponent>,
              @Inject(MD_DIALOG_DATA) public data: any,
              private router: Router,
              private mailer: MailerService) {
  }

  ngOnInit() {
  }

  confirm() {
    this.generateTicketId();
    this.sendEmail();
    this.router.navigate(['confirmCart'], {queryParams: {ticketId: this.ticketId}});
  }

  sendEmail() {
    const title = `New Order | Booking in shop | Ticket ID : ${this.ticketId}`;
    const cart = JSON.parse(localStorage.getItem('cartItems'));
    const emailBody = {
      'firstName': this.firstName,
      'lastName': this.lastName,
      'email': this.email,
      'phone': this.areaCode + this.phone,
      'helper': this.HN1 + this.HN2,
      'cart': cart
    };
    const mail = {title, emailBody};
    console.log(mail);
    // this.mailer.sendEmail(title, emailBody).subscribe((res) => console.log(res));
  }

  generateTicketId = () => {
    this.ticketId = Math.floor(1000 + Math.random() * 9000);
  }
}
