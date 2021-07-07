import { SlicePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { PlayersInfo } from '../model/playersinfo';
import { NavigationExtras, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GameLogicService {

  numberOfPlayers!: number;
  numberOfAlivePlayers!: number;
  numberOfDice!: number;

  playersTotalScoreArray: any = [];
  playerLivesNumberArray: any = [];

  diceRollArray: any[][] = [];

  playerOneDiceRolls: any = [];
  playerTwoDiceRolls: any = [];
  playersThreeDiceRolls: any = [];
  playersFourDiceRolls: any = [];

  constructor(private router: Router) { }




  // To start the game 
  getStartGamePicks(numberOfDice: number, numberOfPlayers: number) {
    this.numberOfPlayers = numberOfPlayers;
    this.numberOfDice = numberOfDice;
    this.numberOfAlivePlayers = numberOfPlayers;
    this.initStartGame();
  }

  initStartGame() {
    for (let i = 0; i < this.numberOfPlayers; i++) {
      this.playerLivesNumberArray[i] = 6;
      this.playersTotalScoreArray[i] = 0;
      this.diceRollArray[i] = [];
      for (let j = 0; j < this.numberOfDice; j++) {
        this.diceRollArray[i][j] = 0;

      }
    }
  }
  gotoWinningPage() {
    console.log("why Dis Not Working")
    this.router.navigate(['winning-page']);
    // }
    // else{
    //   console.log("Dis Not Work")
    // }

  }


  //Needed functions for the game

  // Gens a random number 1-6 times the number of dice
  returnRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }

  //Calls the Random Number Gen and Adds then to the Player total score
  addDiceRoll() {
    for (let i = 0; i < this.numberOfPlayers; i++) {
      if (this.playerLivesNumberArray[i] === 0) {
        this.playersTotalScoreArray.splice(i, 1, NaN);
        this.playerLivesNumberArray.splice(i, 1, NaN);
        this.numberOfAlivePlayers -= 1;
        console.log([this.numberOfAlivePlayers], 'number of alive players')
      }
      if (this.numberOfAlivePlayers === 1) {
        //console.log("I got Broked")
        break
      }
    }

    if (this.numberOfAlivePlayers === 1) {
      console.log('go to winning page')
      this.gotoWinningPage()
    }

    console.log(this.playersTotalScoreArray, 'players score')
    console.log(this.playerLivesNumberArray, 'players lives')
    for (let i = 0; i < this.numberOfPlayers; i++) {
      for (let j = 0; j < this.numberOfDice; j++) {
        let randomNumber = this.returnRandomNumber();
        this.playersTotalScoreArray[i] += randomNumber;
        this.diceRollArray[i][j] += randomNumber;

      }
    }
    console.log(this.diceRollArray, ' Dice Roll Array after loading');
  }

  clearArrays() {
    for (let i = 0; i < this.numberOfPlayers; i++) {
      this.diceRollArray[i] = [];
      this.playersTotalScoreArray[i] = 0;
      for (let j = 0; j < this.numberOfDice; j++) {
        this.diceRollArray[i][j] = 0;
      }
    }
  }

  //Finds the lowest Index Value of the PLayer Score Array. 
  // Also Handles ties of the lowest Value of the Players Score Array
  lowestIndexValue() {
    let lowestIndexValue = 0;
    let lowestIndexValueArray = [];
    let lowestValueInArray = Math.min(...this.playersTotalScoreArray);

    for (let i = 1; i < this.numberOfAlivePlayers; i++) {
      if (this.playersTotalScoreArray[i] < this.playersTotalScoreArray[lowestIndexValue]) {
        lowestIndexValue = i;
      }
    }
    for (let i = 1; i < this.numberOfAlivePlayers; i++) {
      if (this.playersTotalScoreArray.indexOf(this.playersTotalScoreArray[i]) !== this.playersTotalScoreArray.lastIndexOf(this.playersTotalScoreArray[i])) {
        const firstMatchingIndex = this.playersTotalScoreArray.indexOf(this.playersTotalScoreArray[i]);
        const secondMatchingIndex = this.playersTotalScoreArray.lastIndexOf(this.playersTotalScoreArray[i]);
        if (lowestValueInArray === this.playersTotalScoreArray[firstMatchingIndex] || lowestValueInArray === this.playersTotalScoreArray[secondMatchingIndex]) {
          lowestIndexValueArray.push(this.playersTotalScoreArray.indexOf(this.playersTotalScoreArray[i]))
          lowestIndexValueArray.push(this.playersTotalScoreArray.lastIndexOf(this.playersTotalScoreArray[i]))
          return lowestIndexValueArray;
        }
      }
    }
    console.log(lowestIndexValue, 'indexvalue2');
    return lowestIndexValue;
  }

  //To subtract a life for the player with the lowest score
  //Also handles if the lowest score is a tie
  loseLife() {
    const indexValue = this.lowestIndexValue();
    if (Array.isArray(indexValue)) {
      for (let i = 0; i < 2; i++) {
        console.log(indexValue[i]);
        this.playerLivesNumberArray[indexValue[i]] -= 1;

      }
    } else {
      this.playerLivesNumberArray[indexValue] -= 1;
    }

  }

  // checkForPlayerZero(){
  //  for(let i =0; i< this.numberOfPlayers; i++){
  //    if (this.playerLivesNumberArray[i] === 0){

  //    }
  //  }


  // }

  // playerWinner(){

  // }

  //for each button click Or "Roll"
  diceRollBTN() {
    this.clearArrays();
    this.returnRandomNumber();
    this.addDiceRoll();
    this.lowestIndexValue();
    this.loseLife();
  }




  //The Returns to the GameBoard
  returnNumberOfPlayers(): any {
    return this.numberOfPlayers;
  }
  returnNumberOfAlivePlayers(): any {
    return this.numberOfAlivePlayers
  }

  returnNumberOfDice(): any {
    return this.numberOfDice;
  }

  returnPlayersLivesNumber() {
    return this.playerLivesNumberArray;
  }

  returnPlayerTotalScore() {
    return this.playersTotalScoreArray;
  }
  returnDiceRolls() {
    return this.diceRollArray;
  }

}




