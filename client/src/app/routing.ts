import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParfumsComponent} from './parfums/parfums.component';
import {VisageComponent} from './visage/visage.component';
import {DetailsComponent} from './details/details.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {LanguageComponent} from './language/language.component';
import {SuccessPaymentComponent} from './success-payment/success-payment.component';
import {PresentationComponent} from './presentation/presentation.component';
import {TuktukComponent} from './tuktuk/tuktuk.component';
import {ItineraryComponent} from './itinerary/itinerary.component';
import {BookInShopComponent} from './book-in-shop/book-in-shop.component';


const appRoutes: Routes = [
  {path: '', redirectTo: 'language', pathMatch: 'full'},
  {path: 'parfums', component: ParfumsComponent},
  {path: 'presentation', component: PresentationComponent},
  {path: 'tuktuk', component: TuktukComponent},
  {path: 'visage', component: VisageComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'language', component: LanguageComponent},
  {path: 'valid_payment', component: SuccessPaymentComponent},
  {path: 'itinerary', component: ItineraryComponent},
  {path: 'bookInShop', component: BookInShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
