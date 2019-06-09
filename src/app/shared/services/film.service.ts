import { Injectable } from '@angular/core';
import { Film } from '../models/film';

import { Observable, Subject, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private serviceURL = 'http://www.omdbapi.com/?apikey=406518e6&type=movie';  // URL to web api
  private films: Array<Film>;

  constructor(
    private http: HttpClient,
  
  ) {
      
  }

  list(): Observable<Array<Film> | any> {
    return this.http.get<Array<Film>>(this.serviceURL, {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        withCredentials: true
      })
    .pipe(map ((films: Array<Film>) => {films = films.map(films => Object.assign(new Film(), films));
        this.films = films;
        return films;
      }),
      catchError(this.handleError)
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log('error'); // log to console instead
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
