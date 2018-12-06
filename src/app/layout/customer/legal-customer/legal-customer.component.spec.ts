import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalCustomerComponent } from './legal-customer.component';

describe('LegalCustomerComponent', () => {
  let component: LegalCustomerComponent;
  let fixture: ComponentFixture<LegalCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
