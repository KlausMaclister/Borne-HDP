import {Component, OnInit, Inject} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';
import {Countries} from '../inscription/countries';
import {Router} from '@angular/router';


@Component({
  selector: 'app-cart-inscription',
  templateUrl: './cart-inscription.component.html',
  styleUrls: ['./cart-inscription.component.css']
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

  constructor(public dialogRef: MdDialogRef<CartInscriptionComponent>,
              @Inject(MD_DIALOG_DATA) public data: any,
              private router: Router) {
  }

  ngOnInit() {
  }
  checkContinent = (country: string) => {
    this.isNotEuropeanCountry = this.euCountries.indexOf(country) > 1;
  }
  confirm() {
    this.router.navigate(['confirmCart']);
  }
}
