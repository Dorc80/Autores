import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from 'src/app/model/author';
import { AuthorService } from 'src/app/services/author-service';

@Component({
  selector: 'app-authors-list-page',
  templateUrl: './authors-list-page.component.html',
  styleUrls: ['./authors-list-page.component.css']
})
export class AuthorsListPageComponent implements OnInit {

  authors: Array<Author> = [];

  constructor(private _authorService: AuthorService, private _router: Router) { }

  ngOnInit(): void {
    this.getAuthors();
  }

  getAuthors() {
    this._authorService.getAuthors().subscribe(resp => {
      this.authors = resp.authors;
    });
  }

  clickEdit(author: Author) {
    this._router.navigate([`/edit/${author._id}`]);
  }

  deleteAuthor(author: Author) {
    this._authorService.deleteAuthor(author._id).subscribe(resp => {
      let idx = this.authors.indexOf(author);
      if(resp?.author) {
        this.authors.splice(idx, 1);
      }
    });
  }

}
