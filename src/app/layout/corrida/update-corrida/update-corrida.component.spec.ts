import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCorridaComponent } from './update-corrida.component';

describe('UpdateCorridaComponent', () => {
  let component: UpdateCorridaComponent;
  let fixture: ComponentFixture<UpdateCorridaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCorridaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCorridaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
