import {Injectable} from '@angular/core';
import {CustomHttpService} from './http.service';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class MailerService {

  private mailAddress = 'https://beautyscrapr.herokuapp.com/mail';
  constructor(private http: CustomHttpService) {}
  sendEmail(title, emailBody){
    const mail = {title, emailBody};
    return this.http.post(this.mailAddress, {title, emailBody})
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error,could not send the email'));
  }
}
