import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-power-levels',
  templateUrl: './power-levels.component.html',
  styleUrls: ['./power-levels.component.css']
})

export class PowerLevelsComponent {
  
  control = {lvl:null}
  human = 0;
  saiyan = 0;
  super1 = 0;
  super2 = 0;
  super3 = 0;
  super4 = 0;
  
  constructor() { }
  
  calculate(){
    this.human = 1 * this.control.lvl;
    this.saiyan = 10 * this.control.lvl;
    this.super1 = 90 * this.control.lvl;
    this.super2 = 150 * this.control.lvl;
    this.super3 = 250 * this.control.lvl;
    this.super4 = 500 * this.control.lvl;
  }

}
