import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsListComponent } from './components/films/films-list/films-list.component';
import { Observable } from 'rxjs';
import { LoginComponent } from './components/misc/login/login.component';
import { FilmDetailComponent } from './components/films/film-detail/film-detail.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'detail/:id', component: FilmDetailComponent},
  {path: 'list', component: FilmsListComponent},
  {path: '**', component: FilmDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
