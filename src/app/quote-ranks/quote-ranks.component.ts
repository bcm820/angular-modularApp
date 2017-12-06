import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from './quote';

@Component({
  selector: 'app-quote-ranks',
  templateUrl: './quote-ranks.component.html',
  styleUrls: ['./quote-ranks.component.css']
})
export class QuoteRanksComponent implements OnInit {

  quote = new Quote();
  quotes = [];
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(quoteForm){
    quoteForm.form.markAsPristine();
    this.quotes.push(this.quote);
    this.quote = new Quote();
  }

  update(data, i){
    switch(data){
      case 'up':
        this.quotes[i].votes++;
        break;
      case 'down':
        this.quotes[i].votes--;
        break;
      case 'delete':
        this.quotes.splice(i, 1);
        break;
    }
  }

}
