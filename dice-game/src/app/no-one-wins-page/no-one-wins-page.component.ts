import { Component, OnInit } from '@angular/core';
import { NavigationExtras,Router } from '@angular/router';


@Component({
  selector: 'app-no-one-wins-page',
  templateUrl: './no-one-wins-page.component.html',
  styleUrls: ['./no-one-wins-page.component.css']
})
export class NoOneWinsPageComponent implements OnInit {

  constructor(private router:Router) { }
  ngOnInit(): void {
  }


    
  gotoStartPage(){
    this.router.navigate(['']);
  }
      

    
    
    



}
  


