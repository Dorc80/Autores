import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsEditPageComponent } from './authors-edit-page.component';

describe('AuthorsEditPageComponent', () => {
  let component: AuthorsEditPageComponent;
  let fixture: ComponentFixture<AuthorsEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorsEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
