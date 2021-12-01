import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {NaviationBarComponent} from './naviation-bar/naviation-bar.component';
import {ElementComponent} from './element/element.component';
import {SquareComponent} from './square/square.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PageNotFoundComponent,
    NaviationBarComponent,
    ElementComponent,
    SquareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
