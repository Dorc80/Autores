import { Component } from '@angular/core';
import { Author } from './model/author';
import { AuthorService } from './services/author-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AutoresFrontend';

  constructor() { }

}
