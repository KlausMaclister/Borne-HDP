import {Component, OnInit} from '@angular/core';
import {FetcherService} from '../services/fetcher.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-visage',
  templateUrl: './visage.component.html',
  styleUrls: ['./visage.component.css'],
  providers: [FetcherService]
})
export class VisageComponent implements OnInit {
  soins: Observable<any>;
  test: any;
  constructor(private api: FetcherService) {
  }

  ngOnInit() {
    this.soins = this.api.getSoins();
  }

}
