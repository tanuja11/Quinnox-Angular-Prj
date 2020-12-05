import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketconfmComponent } from './ticketconfm.component';

describe('TicketconfmComponent', () => {
  let component: TicketconfmComponent;
  let fixture: ComponentFixture<TicketconfmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketconfmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketconfmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
