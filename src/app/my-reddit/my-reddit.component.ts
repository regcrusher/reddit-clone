import { Component, OnInit, Input } from '@angular/core';
import { RedditDataService } from '../reddit-data.service';
import { Post } from '../post';

@Component({
  selector: 'app-my-reddit',
  templateUrl: './my-reddit.component.html',
  styleUrls: ['./my-reddit.component.css'],
  providers: [RedditDataService]
})
export class MyRedditComponent implements OnInit {
  @Input('subreddit') subreddit: string;

  posts: Post[];

  constructor(private data: RedditDataService) { }

  ngOnInit() {
    this.updateSubreddit();
  }

  ngOnChanges() {
    this.updateSubreddit();
  }

  updateSubreddit = function() {
    console.log('Fetching posts for ' + this.subreddit);
    this.data.fetchPosts(this.subreddit).subscribe(
      posts => this.posts = posts
    );
  }

}
