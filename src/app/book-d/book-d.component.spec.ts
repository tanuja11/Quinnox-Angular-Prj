import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDComponent } from './book-d.component';

describe('BookDComponent', () => {
  let component: BookDComponent;
  let fixture: ComponentFixture<BookDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
