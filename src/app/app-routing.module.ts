import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstComponent} from './pages/first/first.component';
import {SecondComponent} from './pages/second/second.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {ThirdComponent} from './pages/third/third.component';
import {FourthComponent} from './pages/fourth/fourth.component';
import {FifthComponent} from './pages/fifth/fifth.component';
import {SixthComponent} from './pages/sixth/sixth.component';

const routes: Routes = [
  {path: 'first', component: FirstComponent },
  {path: 'second', component: SecondComponent },
  {path: 'third', component: ThirdComponent },
  {path: 'fourth', component: FourthComponent },
  {path: 'fifth', component: FifthComponent },
  {path: 'sixth', component: SixthComponent },
  {path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
