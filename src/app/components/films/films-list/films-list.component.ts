import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/shared/models/film';
import { FILMLIST } from 'src/app/shared/data/data-films'

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.sass']
})
export class FilmsListComponent implements OnInit {

  public more: String = 'info';

  public films: Film [] = FILMLIST;

  constructor(
  ) { }

  ngOnInit() {
  }

  public seeFavourites() {
    this.films = JSON.parse(localStorage.getItem('myFilms'));
  }
}
