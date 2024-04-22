import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckStatusComponent } from './check-status.component';

describe('CheckStatusComponent', () => {
  let component: CheckStatusComponent;
  let fixture: ComponentFixture<CheckStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
