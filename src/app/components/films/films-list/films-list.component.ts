import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/shared/models/film';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.sass']
})
export class FilmsListComponent implements OnInit {

  public more: String = 'info';

  public films: Film [] = [
    {
      id: 85,
      title: 'title',
      year: 2018,
      alt: 'title-film-cartel'
    },

    {
      id: 99,
      title: 'title',
      year: 2018,
      alt: 'title-film-cartel'
    },

    {
      id: 88,
      title: 'title',
      year: 2018,
      alt: 'title-film-cartel'
    },

    {
      id: 77,
      title: 'title',
      year: 2018,
      alt: 'title-film-cartel'
    },


  ]
  constructor() { }

  ngOnInit() {
  }

}
