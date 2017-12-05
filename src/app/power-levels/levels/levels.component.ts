import { Component, Input } from '@angular/core';
import { NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css']
})
export class LevelsComponent {

  @Input() level;

  constructor() { }

}
