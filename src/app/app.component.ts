import { Component } from '@angular/core';
/*
app-root: shown between html <body> tag as <app-root>
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  name = "";
}
