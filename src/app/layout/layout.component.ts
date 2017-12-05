import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  pars = [
    'paragraph1',
    'paragraph2',
    'paragraph3'
  ]

  ngOnInit() {
  }

}
