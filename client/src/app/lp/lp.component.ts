import {Component, OnInit} from '@angular/core';
import {FetcherService} from '../services/fetcher.service';
import {NgxCarousel} from 'ngx-carousel';

@Component({
  selector: 'app-lp',
  templateUrl: './lp.component.html',
  styleUrls: ['./lp.component.css']
})
export class LPComponent implements OnInit {
  carousel: any;
  carouselOne: NgxCarousel;

  constructor(private fetcher: FetcherService) {
  }

  ngOnInit() {
  }

}
