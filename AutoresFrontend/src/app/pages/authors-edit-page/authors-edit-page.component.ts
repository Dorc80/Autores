import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HandleErrorService } from '../../services/handleError/handle-error.service';
import { Author } from '../../model/author';
import { AuthorService } from '../../services/author-service';

@Component({
  selector: 'app-authors-edit-page',
  templateUrl: './authors-edit-page.component.html',
  styleUrls: ['./authors-edit-page.component.css']
})
export class AuthorsEditPageComponent implements OnInit {

  author: Author = {
    name: ''
  }
  errorMsg: string;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _authorService: AuthorService,
    private _handleErrorService: HandleErrorService
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.getAuthor(id);
    });
  }

  getAuthor(id: string) {
    this._authorService.getAuthor(id).subscribe(resp => {
      this.author = resp.author
    });
  }

  clickCancel() {
    this._router.navigate(['/']);
  }

  clickSumbit() {
    this._authorService.updateAuthor(this.author._id, this.author).subscribe(resp => {
      this.author = resp.author;
      this._router.navigate(['/']);
    },
      error => this.errorMsg = this._handleErrorService.handleError(error))
  }

}
