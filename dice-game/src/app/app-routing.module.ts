import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GameBoardPageComponent } from './game-board-page/game-board-page.component';
import { WinningPageComponent } from './winning-page/winning-page.component';



const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'game-board', component: GameBoardPageComponent },
  { path: 'winning-page', component: WinningPageComponent },
  { path: '**', component: PageNotFoundComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
