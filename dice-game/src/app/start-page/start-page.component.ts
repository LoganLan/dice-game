import { Component, OnInit } from '@angular/core';
import { NavigationExtras,Router } from '@angular/router';
import { GameLogicService } from '../service/game-logic.service';
@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  playerNumberSliderValue: number = 2;
  numberDice: number = 1;
 

  constructor(private router:Router, private gameLogic: GameLogicService) { }

  ngOnInit(): void {
  }

  updatePlayerNumSliderValue(event: any) {
    this.playerNumberSliderValue = event.value;
  }

  updateNumberDiceSliderValue(event:any){
    this.numberDice = event.value; 
  }

  //Send value to game-logic service then move to gangboard page
  //want to check to make sure the two values are passe to the game logic page
  gotoGameBoardPage(numberDice:number, playerNumberSliderValue:number){
    this.router.navigate(['game-board']);
    this.gameLogic.getStartGamePicks(numberDice,playerNumberSliderValue)
  }
}
