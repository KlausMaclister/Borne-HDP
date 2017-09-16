import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {MdProgressBarModule} from '@angular/material';

import {CustomHttpService} from './services/http.service';
import {PaymentService} from './services/payment.service';
/*external dependencies*/
import { CovalentLayoutModule, CovalentStepsModule } from '@covalent/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule} from '@angular/material';
/*Routing*/
import {AppRoutingModule} from './routing';
import {MdSelectModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdDialogModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import {MdProgressSpinnerModule} from '@angular/material';


/*views*/
import { ParfumsComponent } from './parfums/parfums.component';
import { VisageComponent } from './visage/visage.component';

import {MdCardModule} from '@angular/material';
import { DetailsComponent } from './details/details.component';
import {DataBusService} from './services/data-bus.service';
import {FetcherService} from './services/fetcher.service';
import { InscriptionComponent } from './inscription/inscription.component';
import { CartComponent } from './cart/cart.component';
import {LanguageComponent} from './language/language.component';
import { SuccessPaymentComponent } from './success-payment/success-payment.component';
import { PresentationComponent } from './presentation/presentation.component';
import { TuktukComponent } from './tuktuk/tuktuk.component';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { BookInShopComponent } from './book-in-shop/book-in-shop.component';


@NgModule({
  declarations: [
    AppComponent,
    ParfumsComponent,
    VisageComponent,
    DetailsComponent,
    InscriptionComponent,
    CartComponent,
    LanguageComponent,
    SuccessPaymentComponent,
    PresentationComponent,
    TuktukComponent,
    ItineraryComponent,
    BookInShopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    CovalentLayoutModule,
    MdSelectModule,
    CovalentStepsModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdButtonModule,
    MdCardModule,
    MdDialogModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdListModule
  ],
  bootstrap: [AppComponent],
  providers: [DataBusService, FetcherService, CustomHttpService, PaymentService],
  entryComponents: [CartComponent, InscriptionComponent]
})
export class AppModule { }
