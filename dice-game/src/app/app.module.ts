import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { StartPageComponent } from './start-page/start-page.component';

import { GameBoardPageComponent } from './game-board-page/game-board-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    GameBoardPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
