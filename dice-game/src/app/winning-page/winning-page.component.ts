import { Component, OnInit } from '@angular/core';
import { NavigationExtras,Router } from '@angular/router';
import { GameLogicService } from '../service/game-logic.service';


@Component({
  selector: 'app-winning-page',
  templateUrl: './winning-page.component.html',
  styleUrls: ['./winning-page.component.css']
})
export class WinningPageComponent implements OnInit {

  constructor(private router:Router, private gameLogic: GameLogicService) { }
  winningPlayer !: number;
  ngOnInit(): void {
    this.winningPlayer = this.gameLogic.returnWinningPlayer()
  }



    
  gotoStartPage(){
    this.router.navigate(['']);
  }
      

    
    
    



}
  


