import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'consumer-app';
  data = 'C';
  items = [{text: 'A', value: 'A'}, {text: 'B', value: 'B'}, {text: 'C', value: 'C'}];
}
