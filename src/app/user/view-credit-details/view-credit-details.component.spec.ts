import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCreditDetailsComponent } from './view-credit-details.component';

describe('ViewCreditDetailsComponent', () => {
  let component: ViewCreditDetailsComponent;
  let fixture: ComponentFixture<ViewCreditDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCreditDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCreditDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
