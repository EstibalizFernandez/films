import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/shared/models/film';
import { FILMLIST } from 'src/app/shared/data/data-films'

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.sass']
})
export class FilmsListComponent implements OnInit {

  public films: Film [] = FILMLIST;
  public fav: Boolean = true;
  public all: Boolean = true;

  constructor(
  ) { }

  ngOnInit() {
    if (localStorage.getItem('myFilms') === null) {
      this.fav = true;
    } else {
      this.fav = false;
    }

    console.log('local', localStorage.getItem('myFilms'));
  }

  public seeFavourites() {
    this.films = [];
    this.films = JSON.parse(localStorage.getItem('myFilms'));
    this.fav = true;
    this.all = false;
  }

  public seeAll() {
    this.films = [];
    this.films = FILMLIST;
    this.fav = false;
    this.all = false;
  }
}
