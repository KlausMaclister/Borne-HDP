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

import {MdCardModule} from '@angular/material';
import {DataBusService} from './services/data-bus.service';
import {FetcherService} from './services/fetcher.service';
import {LanguageComponent} from './language/language.component';
import { TuktukComponent } from './tuktuk/tuktuk.component';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { EcranVeilleComponent } from './ecran-veille/ecran-veille.component';
import {TuktukFRComponent} from './tuktuk.FR/tuktuk.component';
import {TuktukESComponent} from './tukuk.es/tuktuk.component';
import { PrintingComponent } from './printing/printing.component';



@NgModule({
  declarations: [
    AppComponent,
    LanguageComponent,
    TuktukComponent,
    TuktukFRComponent,
    TuktukESComponent,
    ItineraryComponent,
    EcranVeilleComponent,
    PrintingComponent
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
  providers: [DataBusService, FetcherService, CustomHttpService, PaymentService]
})
export class AppModule { }
