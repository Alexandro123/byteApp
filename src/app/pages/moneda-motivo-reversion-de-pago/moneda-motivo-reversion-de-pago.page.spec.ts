import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonedaMotivoReversionDePagoPage } from './moneda-motivo-reversion-de-pago.page';

describe('MonedaMotivoReversionDePagoPage', () => {
  let component: MonedaMotivoReversionDePagoPage;
  let fixture: ComponentFixture<MonedaMotivoReversionDePagoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonedaMotivoReversionDePagoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonedaMotivoReversionDePagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
