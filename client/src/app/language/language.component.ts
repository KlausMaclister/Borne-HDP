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
        localStorage.setItem('language', 'US');
        break;
      case 'FR':
        localStorage.setItem('language', 'FR');
        break;
      case 'ES':
        localStorage.setItem('language', 'ES');
        break;
    }
    this.router.navigate(['presentation']);
  }
}
