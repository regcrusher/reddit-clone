import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Reddit Client';
  subreddit: string = '/r/askreddit';

  updateSubreddit = function(subReddit) {
    this.subreddit = subReddit;
  }

  getSubredditByList = function(eventStr) {
    this.updateSubreddit(eventStr.target.dataset.subreddit);
  }

  getSubredditByValue = function(e) {
    this.updateSubreddit(e.target.value);
  }
}
