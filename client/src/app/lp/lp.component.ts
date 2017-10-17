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
    this.fetcher.getCarousel().subscribe((data: any) => {
      this.carousel = data;
    });
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 1000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    };
  }
  public carouselTileLoad(evt: any) {
    const len = this.carousel.length;
    for (let i = len; i < len + 10; i++) {
      if (!i.image.includes('https')){
        this.carousel.push(i);
      }
    }
  }
}
