import {Component, OnInit, AfterViewChecked} from '@angular/core';
import {FetcherService} from '../services/fetcher.service';
import {DataBusService} from '../services/data-bus.service';
import {ProductModel} from '../Models/product';
import {Router} from '@angular/router';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';


@Component({
  selector: 'app-parfums',
  templateUrl: './parfums.component.html',
  styleUrls: ['./parfums.component.css'],
  providers: [FetcherService]
})
export class ParfumsComponent implements OnInit, AfterViewChecked {
  allParfums: any[] = [];
  brandsToDisplay: any[] = [];
  bigArr: any[];
  parfumsFire: FirebaseListObservable<any[]>;
  fireBrands: FirebaseListObservable<any[]>;

  constructor(private api: FetcherService,
              private dataBus: DataBusService,
              private router: Router,
              private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.fetchParfums();
  }

  ngAfterViewChecked() {
    this.dataBus.setDataLoadingStatus(false);
  }

  getDetails = (product: ProductModel) => {
    this.dataBus.setNewProduct(product);
    this.router.navigate(['/details']);
  }
  isNotUrl(url: string) {
    return !url.includes('http');
  }
  fetchParfums() {
    this.fireBrands = this.db.list('/brands');
    this.fireBrands.subscribe((brand: any) => {
      brand.forEach((br: any) => {
        if (br.available) {
          this.brandsToDisplay.push(br.name);
        }
      });
      this.parfumsFire = this.db.list('/parfums');
      this.parfumsFire.subscribe((parfums: any) => {
        this.bigArr = parfums;
        this.allParfums = this.bigArr;
      });
    });

  }

  filterParfums = (brand: string) => {
    this.allParfums = this.bigArr.filter((parfum) => {
      return parfum.brand === brand;
    });
  }

}
