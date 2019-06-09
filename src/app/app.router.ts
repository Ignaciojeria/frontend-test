import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {GameComponent} from './game/game.component';
import {GameListComponent} from './game-list/game-list.component';


export const ROUTER: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'game', component: GameComponent},
  {path: 'game-list', component: GameListComponent}
]

export const ROUTES: ModuleWithProviders = RouterModule.forRoot(ROUTER);
