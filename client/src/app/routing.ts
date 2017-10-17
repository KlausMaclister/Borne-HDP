import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParfumsComponent} from './parfums/parfums.component';
import {DetailsComponent} from './details/details.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {LanguageComponent} from './language/language.component';
import {SuccessPaymentComponent} from './success-payment/success-payment.component';
import {PresentationComponent} from './presentation/presentation.component';
import {TuktukComponent} from './tuktuk/tuktuk.component';
import {ItineraryComponent} from './itinerary/itinerary.component';
import {EcranVeilleComponent} from './ecran-veille/ecran-veille.component';
import {CartConfirmComponent} from './cart-confirm/cart-confirm.component';
import {PrintingComponent} from './printing/printing.component';
import {LPComponent} from './lp/lp.component';


const appRoutes: Routes = [
  {path: '', redirectTo: 'parfums', pathMatch: 'full'},
  {path: 'parfums', component: ParfumsComponent},
  {path: 'lp', component: LPComponent},
  {path: 'presentation', component: PresentationComponent},
  {path: 'tuktuk', component: TuktukComponent},
  {path: 'print', component: PrintingComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'language', component: LanguageComponent},
  {path: 'valid_payment', component: SuccessPaymentComponent},
  {path: 'itinerary', component: ItineraryComponent},
  {path: 'ecranVeille', component: EcranVeilleComponent},
  {path: 'confirmCart', component: CartConfirmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
