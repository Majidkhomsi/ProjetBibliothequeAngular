import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliothequeComponent } from './bibliotheque/bibliotheque.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: BibliothequeComponent },
{ path: 'about', component: BibliothequeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
