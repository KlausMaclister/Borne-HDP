/**
 * Created by if_found_call_0586288454 on 12/07/2017 ap. J.-C..
 */
/**
 * Created by if_found_call_0586288454 on 24/04/2017 ap. J.-C..
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {ParfumsComponent} from './parfums/parfums.component';
import {VisageComponent} from './visage/visage.component';
import {DetailsComponent} from './details/details.component';
import {InscriptionComponent} from './inscription/inscription.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'parfums', pathMatch: 'full'},
  {path: 'parfums', component: ParfumsComponent},
  {path: 'visage', component: VisageComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'inscription', component: InscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
