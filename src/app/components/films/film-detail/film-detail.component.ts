import { Component, OnInit, Input } from '@angular/core';
import { Film } from 'src/app/shared/models/film';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.sass']
})
export class FilmDetailComponent implements OnInit {

  public more: String = 'back';
  @Input() film: Film = new Film();
  constructor() { }

  ngOnInit() {

  }

}
