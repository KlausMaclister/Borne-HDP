import {Component, OnInit, AfterViewChecked} from '@angular/core';
import {FetcherService} from '../services/fetcher.service';
import {DataBusService} from '../services/data-bus.service';
import {ProductModel} from '../Models/product';
import {Router} from '@angular/router';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-parfums',
  templateUrl: './parfums.component.html',
  styleUrls: ['./parfums.component.css'],
  providers: [FetcherService]
})
export class ParfumsComponent implements OnInit, AfterViewChecked {
  allParfums: any[];
  brands: any[];
  bigArr: any[];

  constructor(private api: FetcherService, private dataBus: DataBusService, private router: Router) {
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

  hasNoUpdatedUrl = (url: string) => {
    return url.includes('https');
  }

  fetchParfums() {
    this.api.getParfums().subscribe((res) => {
      this.brands = [...Array.from(new Set(res.map(parfum => parfum.brand)))];
      console.log(this.brands);
      this.bigArr = res;
      const sub = res.slice(0, 200);
      this.allParfums = sub;
    });
  }

  filterParfums = (brand: string) => {
    this.allParfums = this.bigArr.filter((parfum) => {
      return parfum.brand === brand;
    });
  }

}
