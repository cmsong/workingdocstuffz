import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http/http';
import { Reviews } from '../models/Reviews';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  createReviews(reviews:Reviews) :Observable<Reviews>{
    return this.http.post<Reviews>('http://localhost:8080/reviews', reviews, {headers: this.headers});
  }

  getReviewsById(id:number){
    return this.http.get('http://localhost:8080/reviews/' + id);
  }

  getReviewsByUsername(username:string){
    return this.http.get('http://localhost:8080/reviews?username='+username);
  }

  getReviewsByGames(game:string){
    return this.http.get('http://localhost:8080/reviews?title='+game);
  }

  getAllReviews(){
    return this.http.get('http://localhost:8080/reviews');
  }

  updateReviews(change:Reviews) :Observable<Reviews>{
    return this.http.put<Reviews>('http://localhost:8080/reviews', change, {headers: this.headers});
  }

  deleteReviews(id:number){
    return this.http.delete('http://localhost:8080/reviews/'+id);
  }
}