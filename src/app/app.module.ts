import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { LayoutComponent } from './layout/layout.component';
  import { HeaderComponent } from './layout/header/header.component';
  import { NavComponent } from './layout/nav/nav.component';
  import { MainComponent } from './layout/main/main.component';

import { PowerLevelsComponent } from './power-levels/power-levels.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    MainComponent,
    PowerLevelsComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
