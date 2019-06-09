import { Component, OnInit, Input } from '@angular/core';
import { Film } from 'src/app/shared/models/film';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.sass']
})
export class FilmItemComponent implements OnInit {

  @Input() film: Film = new Film();
  @Input() more: string = '';

  constructor() { }

  ngOnInit() {
    console.log('this.film', this.film);
  }

}
