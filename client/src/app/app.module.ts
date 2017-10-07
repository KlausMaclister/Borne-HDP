import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {MdProgressBarModule} from '@angular/material';
import { environment } from '../environments/environment';

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
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
/*views*/
import { ParfumsComponent } from './parfums/parfums.component';

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
import { EcranVeilleComponent } from './ecran-veille/ecran-veille.component';
import { CartInscriptionComponent } from './cart-inscription/cart-inscription.component';
import { CartConfirmComponent } from './cart-confirm/cart-confirm.component';
import { AddToCartComponent } from './modals/add-to-cart/add-to-cart.component';
import {PrintingComponent} from './printing/printing.component';


@NgModule({
  declarations: [
    AppComponent,
    ParfumsComponent,
    DetailsComponent,
    InscriptionComponent,
    CartComponent,
    LanguageComponent,
    SuccessPaymentComponent,
    PresentationComponent,
    TuktukComponent,
    PrintingComponent,
    ItineraryComponent,
    EcranVeilleComponent,
    CartInscriptionComponent,
    CartConfirmComponent,
    AddToCartComponent
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
    MdListModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  bootstrap: [AppComponent],
  providers: [DataBusService, FetcherService, CustomHttpService, PaymentService],
  entryComponents: [CartComponent, InscriptionComponent, CartInscriptionComponent, AddToCartComponent]
})
export class AppModule { }
