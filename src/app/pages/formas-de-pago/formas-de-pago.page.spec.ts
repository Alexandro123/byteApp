import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormasDePagoPage } from './formas-de-pago.page';

describe('FormasDePagoPage', () => {
  let component: FormasDePagoPage;
  let fixture: ComponentFixture<FormasDePagoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormasDePagoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormasDePagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
