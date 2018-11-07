import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxoDeCaixaComponent } from './fluxo-de-caixa.component';

describe('FluxoDeCaixaComponent', () => {
  let component: FluxoDeCaixaComponent;
  let fixture: ComponentFixture<FluxoDeCaixaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluxoDeCaixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxoDeCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
