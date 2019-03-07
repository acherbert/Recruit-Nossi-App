import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {
  baseUrl: string = "http:recruit.nossi.online/wp-json/wp/v2/";
  http;
  
  constructor(http:Http){
    this.http = http;

  }

  retrieveCategories(){
    return this.http.get(this.baseUrl + 'categories')
    .pipe(
      map(res => res)
    )
  }

  retrievePostsInCategory(categoryId: number){
    return this.http.get(this.baseUrl + 'posts?categories=' + categoryId)
     .pipe(
      map(res => res)
    )
  }

}