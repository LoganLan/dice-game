import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { GameLogicService } from '../service/game-logic.service';
import { PlayersInfo } from '../model/playersinfo';
import { NavigationExtras,Router } from '@angular/router';

@Component({
  selector: 'app-game-board-page',
  templateUrl: './game-board-page.component.html',
  styleUrls: ['./game-board-page.component.css']
})
export class GameBoardPageComponent implements OnInit {

  numberOfPlayers!: any;
  numberOfAlivePlayers!: number;
  numberOfDices!: void;
  playersLives: any = [];
  playersScore: any = []
  diceRolls: any = [];

  constructor(private gameLogic: GameLogicService, private router:Router) { }

  ngOnInit(): void {

    this.gameStart();
  }

  gameStart(): any {
    this.numberOfDices = this.gameLogic.returnNumberOfDice();
    this.numberOfPlayers = this.gameLogic.returnNumberOfPlayers();
    this.numberOfAlivePlayers = this.gameLogic.returnNumberOfAlivePlayers();
    this.playersLives = this.gameLogic.returnPlayersLivesNumber();
    this.playersScore = this.gameLogic.returnPlayerTotalScore();

    console.log(this.numberOfPlayers, 'Player Num');
    console.log(this.numberOfDices, 'Dice Num');
    console.log(this.playersLives, ' players Lives');
    console.log(this.numberOfAlivePlayers, 'number of alive players');
  }

  btnDiceRoll(): any {
    this.gameLogic.diceRollBTN();
    this.diceRolls = this.gameLogic.returnDiceRolls();

  }

}