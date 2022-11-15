import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author, AuthorResp, AuthorsResp } from '../model/author';
import { environment } from "../../environments/environment";

const { baseUrl } = environment

@Injectable()
export class AuthorService {

  constructor(private _http: HttpClient) { }

  authorCreate(author: Author) {
    return this._http.post<AuthorResp>(`${baseUrl}/authors`, author);
  }

  getAuthors() {
    return this._http.get<AuthorsResp>(`${baseUrl}/authors`);
  }

  getAuthor(id: string) {
    return this._http.get<AuthorResp>(`${baseUrl}/authors/${id}`)
  }

  updateAuthor(id: string, author: Author) {
    return this._http.put<AuthorResp>(`${baseUrl}/authors/${id}`, author);
  }

  deleteAuthor(id) {
    return this._http.delete<AuthorResp>(`${baseUrl}/authors/${id}`);
  }

}
