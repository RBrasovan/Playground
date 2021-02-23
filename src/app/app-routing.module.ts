import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapShipComponent } from './bootstrap-ship/bootstrap-ship.component';
import { EscapeComponent } from './escape/escape.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'bootstrap-ship', component:BootstrapShipComponent},
  {path:'escape', component:EscapeComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
