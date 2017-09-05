import {Component, OnInit, AfterViewChecked} from '@angular/core';
import {FetcherService} from '../services/fetcher.service';
import {DataBusService} from '../services/data-bus.service';
import {ProductModel} from '../Models/product';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
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
  brands: string[];

  constructor(private api: FetcherService, private dataBus: DataBusService, private router: Router) {
  }

  ngOnInit() {
    this.fetchParfums();
    this.fetchBrands();

  }

  ngAfterViewChecked() {
    this.dataBus.setDataLoadingStatus(false);
  }

  getDetails = (product: ProductModel) => {
    this.dataBus.setNewProduct(product);
    this.router.navigate(['/details']);
  }

  fetchParfums() {
    this.api.getParfums().subscribe((res) => {
      const sub = res.slice(0, 150);
      this.allParfums = sub;
    });
  }

  displayAssociateProduct(reference: string) {
    const url = 'assets/jsons/brands/parfums/' + reference + '.json';
    const unesc = decodeURIComponent(url);
    console.log(unesc);
    this.api.getParfumsFromBrand(url).subscribe((res) => {
      this.allParfums = [];
      setTimeout(() => {
        this.allParfums = res;
      }, 0);
    });
  }

  fetchBrands() {
    this.api.getParfumsBrands().subscribe(res => this.brands = res);
  }

}
