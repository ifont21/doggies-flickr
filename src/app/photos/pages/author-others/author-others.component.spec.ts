import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorOthersComponent } from './author-others.component';

describe('AuthorOthersComponent', () => {
  let component: AuthorOthersComponent;
  let fixture: ComponentFixture<AuthorOthersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorOthersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
