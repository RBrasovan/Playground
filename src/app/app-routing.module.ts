import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BootstrapShipComponent } from './bootstrap-ship/bootstrap-ship.component';

const routes: Routes = [
  {path:'', component:BootstrapShipComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
