import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsAddPageComponent } from './authors-add-page.component';

describe('AuthorsAddPageComponent', () => {
  let component: AuthorsAddPageComponent;
  let fixture: ComponentFixture<AuthorsAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorsAddPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
