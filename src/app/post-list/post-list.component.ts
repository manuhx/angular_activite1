import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../model/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  getListStyle(style: string) {
    if (style === 'success') {
      return this.post.getLoveIts() > 0;
    } else if (style === 'danger') {
      return this.post.getLoveIts() < 0;
    }
  }

  likePost() {
    this.post.setLoveIts(this.post.getLoveIts() + 1);
  }

  dislikePost() {
    this.post.setLoveIts(this.post.getLoveIts() - 1);
  }

  thumbs(orientation: string) {
    if (orientation === 'up') {
      return this.post.getLoveIts() > 0;
    } else if (orientation === 'down') {
      return this.post.getLoveIts() < 0;
    } else if (orientation === 'right') {
      return this.post.getLoveIts() === 0;
    }
  }
}
