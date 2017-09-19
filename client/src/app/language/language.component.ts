import {Component} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-language',
  templateUrl: './language.html',
  styleUrls: ['./language.css']
})
export class LanguageComponent {

  constructor(private router: Router) {
  }

  setLanguage = (language: string) => {
    switch (language) {
      case 'US':
        localStorage.setItem('language', 'en');
        break;
      case 'FR':
        localStorage.setItem('language', 'fr');
        break;
      case 'ES':
        localStorage.setItem('language', 'es');
        break;
    }
    this.router.navigate(['presentation']);
  }
}
