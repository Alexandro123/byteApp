import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioEjecutivoPage } from './cambio-ejecutivo.page';

describe('CambioEjecutivoPage', () => {
  let component: CambioEjecutivoPage;
  let fixture: ComponentFixture<CambioEjecutivoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambioEjecutivoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambioEjecutivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
