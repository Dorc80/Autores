import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsListPageComponent } from "../app/pages/authors-list-page/authors-list-page.component";
import { AuthorsAddPageComponent } from './pages/authors-add-page/authors-add-page.component';
import { AuthorsEditPageComponent } from './pages/authors-edit-page/authors-edit-page.component';
import { AuthorService } from './services/author-service';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { HandleErrorService } from './services/handleError/handle-error.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsListPageComponent,
    AuthorsAddPageComponent,
    AuthorsEditPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthorService, HandleErrorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
