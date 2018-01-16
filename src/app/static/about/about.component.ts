import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';

@Component({
  selector: 'anms-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;

  constructor() {}

  ngOnInit() {}
  
tiles = [
    {text: 'Strength', cols: 3, rows: 1, color: '#444444'},
    {text: 'Agility', cols: 3, rows: 1, color: '#202020'},
    {text: 'Willpower', cols: 3, rows: 1, color: '#444444'},
    {text: 'Logic', cols: 3, rows: 1, color: '#202020'},
    {text: 'Charisma', cols: 3, rows: 1, color: '#444444'},
    {text: 'Edge', cols: 3, rows: 1, color: '#202020'}
  ];
    
    
}
