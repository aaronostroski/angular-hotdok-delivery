import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000)

      ])     
    ]),
    trigger('fadeIn',[
      transition('void => *', [
        style({ opacity: 0}),
        animate(3000)
          
      ])
   
    ])
  ]
  
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
