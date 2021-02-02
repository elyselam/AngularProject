import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts = [
    {title: "first", content:"1st content!"},
    {title: "second", content:"2nd content"},
    {title: "third", content:"3rd content"},
  ]

}
