import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeEntry } from './time-entry.';

describe('TimeEntry', () => {
  let component: TimeEntry;
  let fixture: ComponentFixture<TimeEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeEntry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeEntry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
