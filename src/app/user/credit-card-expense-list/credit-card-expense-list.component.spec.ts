import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardExpenseListComponent } from './credit-card-expense-list.component';

describe('CreditCardExpenseListComponent', () => {
  let component: CreditCardExpenseListComponent;
  let fixture: ComponentFixture<CreditCardExpenseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardExpenseListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditCardExpenseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
