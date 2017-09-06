import {Component, OnInit} from '@angular/core';
import {FetcherService} from '../services/fetcher.service';
import { Observable } from 'rxjs/Rx';
import {DataBusService} from '../services/data-bus.service';
import {ProductModel} from '../Models/product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-visage',
  templateUrl: './visage.component.html',
  styleUrls: ['./visage.component.css'],
  providers: [FetcherService]
})
export class VisageComponent implements OnInit {
  allSoins: any[];
  brands: any[];
  bigArr: any[];

  constructor(private api: FetcherService, private dataBus: DataBusService, private router: Router) {
  }
  ngOnInit() {
    this.fetchSoins();
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

  fetchSoins() {
    this.api.getSoins().subscribe((res) => {
      this.brands = [...Array.from(new Set(res.map(parfum => parfum.brand)))];
      this.bigArr = res;
      const sub = res.slice(0, 200);
      this.allSoins = sub;
    });
  }

  filterSoins = (brand: string) => {
    this.allSoins = this.bigArr.filter((parfum) => {
      return parfum.brand === brand;
    });
  }


}
