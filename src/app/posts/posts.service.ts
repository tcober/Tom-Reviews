import { Injectable } from '@angular/core';

import { Http, HttpModule, Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Post } from './post';

@Injectable()
export class PostsService {

private postsUrl = "http://localhost:8888/wp-json/wp/v2/";

constructor(private http: Http) { }

getPosts(): Observable<Post[]> {

    return this.http
      .get(this.postsUrl + 'posts')
      .map((res: Response) => res.json());

}

}