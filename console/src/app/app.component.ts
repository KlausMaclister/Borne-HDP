import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  all: any;
  items: FirebaseListObservable<any[]>;
  isParfums = true;
  isVisage = false;
  isBrand = false;
  brands: any;

  constructor(private db: AngularFireDatabase) {
    this.items = this.db.list('/parfums');
  }

  switchToParfums = () => {
    this.items = this.db.list('/parfums');
    this.isParfums = true;
    this.isVisage = false;
    this.isBrand = false;
  }
  switchToSoins = () => {
    this.items = this.db.list('/visage');
    this.isParfums = false;
    this.isVisage = true;
    this.isBrand = false;

  }
  switchToBrands = () => {
    this.items = this.db.list('/brands');
    this.isParfums = false;
    this.isVisage = false;
    this.isBrand = true;
  }
  update = (event: any, key: string) => {
    const checked = event.target.checked;
    this.items.update(key, {available: checked});
  }
}

