import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  @Input() quote;
  @Output() update = new EventEmitter;
  
  constructor() { }

  ngOnInit() {
  }

  updateQuote(action){
    this.update.emit(action);
  }

}
