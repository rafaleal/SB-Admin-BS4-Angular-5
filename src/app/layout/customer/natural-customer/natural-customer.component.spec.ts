import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalCustomerComponent } from './natural-customer.component';

describe('NaturalCustomerComponent', () => {
  let component: NaturalCustomerComponent;
  let fixture: ComponentFixture<NaturalCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaturalCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
