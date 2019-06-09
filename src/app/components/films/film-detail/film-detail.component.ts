import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/shared/models/film';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.sass']
})
export class FilmDetailComponent implements OnInit {

  public more: String = 'back';
  public film: Film = new Film();
  private myFavourites = [];
  private disabled: Boolean = false;
  public action: String = 'Add to my favourites'

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.film.id = Number(this.route.snapshot.paramMap.get("id")),
    this.film.title = this.route.snapshot.paramMap.get("title"),
    this.film.year = Number(this.route.snapshot.paramMap.get("year")),
    this.film.poster = this.route.snapshot.paramMap.get("poster")
  }

  addToFavourites(film: Film) {
    this.myFavourites.push(film);
    localStorage.setItem('myFilms', JSON.stringify(this.myFavourites));
    this.action = 'Added to favourites'
    this.disabled = true;
  }
}
