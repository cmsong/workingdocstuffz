import { Injectable } from '@angular/core';
import { Genre } from '../models/Genre';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  allGenres = [];

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  createGenre(genre: Genre) :Observable<Genre>{
    return this.http.post<Genre>('http://localhost:8080/genres', genre, {headers: this.headers});
  }

  getGenreById(id:number){
    return this.http.get('http://localhost:8080/genres?id=' + id);
  }

  getAllGenres() :Observable<Genre[]>{
    return this.http.get<Genre[]>('http://localhost:8080/genres');
  }

  updateGenres(change: Genre) :Observable<Genre>{
    return this.http.put<Genre>('http://localhost:8080/genres', change, {headers: this.headers});
  }

  deleteGenres(id:number){
    return this.http.delete('http://localhost:8080/genres/' + id);
  }


}