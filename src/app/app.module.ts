import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { BootstrapShipComponent } from './bootstrap-ship/bootstrap-ship.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EscapeComponent } from './escape/escape.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GameComponent } from './escape/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavigationComponent,
    MainFooterComponent,
    BootstrapShipComponent,
    EscapeComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
