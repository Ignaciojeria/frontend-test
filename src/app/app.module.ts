import {BrowserModule} from '@angular/platform-browser';
import {NgModule, OnInit} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GameService} from './game.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {GameComponent} from './game/game.component';
import {GameListComponent} from './game-list/game-list.component';
import {HomeComponent} from './home/home.component';
import {ROUTES} from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ROUTES

  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
