import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pars = [
    'paragraph1',
    'paragraph2',
    'paragraph3'
  ]

  listenToChild(){
    console.log('success');
  }

}
