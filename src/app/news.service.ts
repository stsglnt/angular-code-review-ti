import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap, concatMap, take } from 'rxjs/operators';
import { from, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NewsServices {
  constructor(private http: HttpClient) {}

  getTopStoriesIds(): Observable<number[]> {
    return this.http.get<any>(
      `https://hacker-news.firebaseio.com/v0/topstories.json`
    );
  }

  getNewStoriesIds(): Observable<number[]> {
    return this.http.get<any>(
      `https://hacker-news.firebaseio.com/v0/newstories.json`
    );
  }

  getStory(storyId: number) {
    return this.http.get<any>(
      `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
    );
  }

  getTopStories() {
    return this.getTopStoriesIds().pipe(
      switchMap((ids: number[]) => {
        return from(ids).pipe(concatMap((id) => this.getStory(id)));
      })
    );
  }

  getNewStories() {
    return this.getNewStoriesIds().pipe(
      switchMap((ids: number[]) => {
        return from(ids).pipe(concatMap((id) => this.getStory(id)));
      })
    );
  }
}
