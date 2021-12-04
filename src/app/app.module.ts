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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { ThirdComponent } from './pages/third/third.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PageNotFoundComponent,
    NaviationBarComponent,
    ElementComponent,
    SquareComponent,
    ThirdComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
