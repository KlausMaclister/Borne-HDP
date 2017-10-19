import {Component, OnInit} from '@angular/core';
import {FetcherService} from '../services/fetcher.service';
import {NgxCarousel} from 'ngx-carousel';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lp',
  templateUrl: './lp.component.html',
  styleUrls: ['./lp.component.css']
})
export class LPComponent implements OnInit {
  carousel: any;
  carouselOne: NgxCarousel;

  constructor(private fetcher: FetcherService, private router: Router) {
  }

  ngOnInit() {
    window.localStorage.clear();
    this.fetcher.getCarousel().subscribe((data: any) => {
      this.carousel = data;
    });
    this.carouselOne = {
      grid: {xs: 2, sm: 3, md: 3, lg: 5, all: 0},
      slide: 1,
      speed: 400,
      animation: 'lazy',
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      easing: 'ease'
    };
  }

  goToMenu() {
    this.router.navigate(['/language']);
  }

  public carouselTileLoad(evt: any) {
    const len = this.carousel.length;
    for (let i = len; i < len + 10; i++) {
      if (!i.image.includes('https')) {
        this.carousel.push(i);
      }
    }
  }
}
