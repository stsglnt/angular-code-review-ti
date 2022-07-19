import { Component } from '@angular/core';
import { NewsServices } from './news.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newStories: any[] = [];
  topStories: any[] = [];
  author: string;

  constructor(private newsService: NewsServices) {
    this.getTopStories();
    this.getNewStories();
  }

  getTopStories() {
    this.newsService.getTopStories().subscribe((res) => {
      this.topStories.push(res);
    });
  }

  getNewStories() {
    this.newsService.getNewStories().subscribe((res) => {
      console.log('res', res);
      this.newStories.push(res);
    });
  }

  getHumanTypeDate(time) {
    return new Date(time * 1000).toLocaleString();
  }
}
