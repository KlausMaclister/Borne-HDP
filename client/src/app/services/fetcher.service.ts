import {Injectable} from '@angular/core';
import {CustomHttpService} from './http.service';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class FetcherService {

  private parfums = 'assets/jsons/parfums.json';
  private productDetails = 'https://beautyscrapr.herokuapp.com/price?url=';

  constructor(private http: CustomHttpService) {
  }

  getProductDetails(url) {
    const newUrl = this.productDetails + url;
    return this.http.get(newUrl)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error, could not fetch product details'));
  }

  getCarousel() {
    const carouselUrl = '../assets/jsons/carousel/carousel.json';
    return this.http.get(carouselUrl)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'could not retrieve local image for carousel'));
  }


}
