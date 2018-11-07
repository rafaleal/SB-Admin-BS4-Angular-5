import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCorridaComponent } from './add-corrida.component';

describe('AddCorridaComponent', () => {
  let component: AddCorridaComponent;
  let fixture: ComponentFixture<AddCorridaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCorridaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCorridaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
