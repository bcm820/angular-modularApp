import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { LayoutComponent } from './layout/layout.component';
  import { HeaderComponent } from './layout/header/header.component';
  import { NavComponent } from './layout/nav/nav.component';
  import { MainComponent } from './layout/main/main.component';

import { PowerLevelsComponent } from './power-levels/power-levels.component';
import { LevelsComponent } from './power-levels/levels/levels.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    MainComponent,
    PowerLevelsComponent,
    LayoutComponent,
    LevelsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
		HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
