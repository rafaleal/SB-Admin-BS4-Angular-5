import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCorridaComponent } from './list-corrida.component';

describe('ListCorridaComponent', () => {
  let component: ListCorridaComponent;
  let fixture: ComponentFixture<ListCorridaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCorridaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCorridaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
