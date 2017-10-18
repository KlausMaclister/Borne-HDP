import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {DataBusService} from '../services/data-bus.service';


@Component({
  selector: 'app-language',
  templateUrl: './language.html',
  styleUrls: ['./language.css']
})
export class LanguageComponent {

  constructor(private router: Router, private dataBus: DataBusService) {
  }
  setLanguage = (language: string) => {
    switch (language) {
      case 'en':
        localStorage.setItem('language', 'en');
        this.dataBus.setLanguage('en');
        break;
      case 'fr':
        localStorage.setItem('language', 'fr');
        this.dataBus.setLanguage('fr');
        break;
    }
    this.router.navigate(['/parfums']);
  }
}
