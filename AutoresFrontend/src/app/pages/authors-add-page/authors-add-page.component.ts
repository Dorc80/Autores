import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from 'src/app/model/author';
import { AuthorService } from 'src/app/services/author-service';
import { HandleErrorService } from 'src/app/services/handleError/handle-error.service';

@Component({
  selector: 'app-authors-add-page',
  templateUrl: './authors-add-page.component.html',
  styleUrls: ['./authors-add-page.component.css']
})
export class AuthorsAddPageComponent implements OnInit {

  author: Author = {
    name: ''
  };
  errorMsg: String;

  constructor(
    private _authorService: AuthorService,
    private _router: Router,
    private _handleErrorService: HandleErrorService) { }

  ngOnInit(): void {
  }

  createAuthor() {
    this._authorService.authorCreate(this.author).subscribe(author => {
      this._router.navigate(['/']);
    },
      (error) => {
        this.errorMsg = this._handleErrorService.handleError(error);
      });
  }

}
