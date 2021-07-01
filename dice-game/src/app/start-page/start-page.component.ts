import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  playerNumberSliderValue: number = 2;
  numberDice: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  updatePlayerNumSliderValue(event: any) {
    this.playerNumberSliderValue = event.value;
  }

  updateNumberDiceSliderValue(event:any){
    this.numberDice = event.value; 
  }

  //Send value to game-logic service then move to gangboard page
  gotoGameBoardPage(){
    
  }
}
