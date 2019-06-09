import { Component, OnInit, Input } from '@angular/core';
import { Film } from 'src/app/shared/models/film';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.sass']
})
export class FilmDetailComponent implements OnInit {

  public more: String = 'back';
  public film: Film = new Film();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.film.id = this.route.snapshot.paramMap.get("id"),
    this.film.title = this.route.snapshot.paramMap.get("title"),
    this.film.year = this.route.snapshot.paramMap.get("year"),
      console.log('this.route.data', this.route.data);
  }

}
