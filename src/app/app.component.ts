import { Component, VERSION } from '@angular/core';
import { NewsServices } from './news.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  topNewsIds: number[];

  constructor(private newsService: NewsServices) {
    // this.getTopStoriesIds();
    // this.getTopStories();
  }

  getTopStoriesIds() {
    this.newsService.getTopStoriesIds().subscribe((res) => {
      console.log('res', res);
      this.topNewsIds = res;
    });
  }

  getTopStories() {
    this.newsService.getTopStories().subscribe((res) => {
      console.log('res', res);
    });
  }
}
