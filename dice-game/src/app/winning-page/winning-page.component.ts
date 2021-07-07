import { Component, OnInit } from '@angular/core';
import { NavigationExtras,Router } from '@angular/router';


@Component({
  selector: 'app-winning-page',
  templateUrl: './winning-page.component.html',
  styleUrls: ['./winning-page.component.css']
})
export class WinningPageComponent implements OnInit {

  constructor(private router:Router) { }
  ngOnInit(): void {
  }


    
  gotoStartPage(){
    this.router.navigate(['']);
  }
      

    
    
    



}
  


