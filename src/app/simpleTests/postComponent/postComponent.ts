import { Component } from '@angular/core';

export interface Post {
  title: string;
  description: string;
  globalTotaLikes: number;
}

@Component({
  selector: 'app-post',
  templateUrl: './postComponent.html',
  styleUrls: ['./postComponent.css']
})

export class PostComponent {
  globalTotalLikes: number = 0;

  like() {
    this.globalTotalLikes++;
  }

  dislike() {
    if (this.globalTotalLikes) {
      this.globalTotalLikes--;
    }
  }

}
