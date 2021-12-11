import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FirstComponent} from './pages/first/first.component';
import {SecondComponent} from './pages/second/second.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {NaviationBarComponent} from './naviation-bar/naviation-bar.component';
import {ElementComponent} from './objects/element/element.component';
import {SquareComponent} from './objects/square/square.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {ThirdComponent} from './pages/third/third.component';
import {FourthComponent} from './pages/fourth/fourth.component';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import {FifthComponent} from './pages/fifth/fifth.component';
import {SixthComponent} from './pages/sixth/sixth.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PageNotFoundComponent,
    NaviationBarComponent,
    ElementComponent,
    SquareComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent,
    SixthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
