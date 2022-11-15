import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorsAddPageComponent } from './pages/authors-add-page/authors-add-page.component';
import { AuthorsEditPageComponent } from './pages/authors-edit-page/authors-edit-page.component';
import { AuthorsListPageComponent } from './pages/authors-list-page/authors-list-page.component';

const routes: Routes = [
  {
    path: "",
    component: AuthorsListPageComponent
  },
  {
    path: "new",
    component: AuthorsAddPageComponent
  },
  {
    path: "edit/:id",
    component: AuthorsEditPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
