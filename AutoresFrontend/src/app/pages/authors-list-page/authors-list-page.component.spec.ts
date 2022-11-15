import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsListPageComponent } from './authors-list-page.component';

describe('AuthorsListPageComponent', () => {
  let component: AuthorsListPageComponent;
  let fixture: ComponentFixture<AuthorsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorsListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
