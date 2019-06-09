import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsListComponent } from './components/films/films-list/films-list.component';
import { LoginComponent } from './components/misc/login/login.component';
import { FilmDetailComponent } from './components/films/film-detail/film-detail.component';
import { FilmItemComponent } from './components/films/film-item/film-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsListComponent,
    LoginComponent,
    FilmDetailComponent,
    FilmItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
