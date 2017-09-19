import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LanguageComponent} from './language/language.component';
import {TuktukComponent} from './tuktuk/tuktuk.component';
import {ItineraryComponent} from './itinerary/itinerary.component';
import {EcranVeilleComponent} from './ecran-veille/ecran-veille.component';
import {TuktukESComponent} from './tukuk.es/tuktuk.component';
import {TuktukFRComponent} from './tuktuk.FR/tuktuk.component';
import {PrintingComponent} from './printing/printing.component';


const appRoutes: Routes = [
  {path: '', redirectTo: 'ecranVeille', pathMatch: 'full'},
  {path: 'tuktuk', component: TuktukComponent},
  {path: 'tuktukes', component: TuktukESComponent},
  {path: 'tuktukfr', component: TuktukFRComponent},
  {path: 'language', component: LanguageComponent},
  {path: 'itinerary', component: ItineraryComponent},
  {path: 'ecranVeille', component: EcranVeilleComponent},
  {path: 'print', component: PrintingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
