import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecutivoCuentaPage } from './ejecutivo-cuenta.page';

describe('EjecutivoCuentaPage', () => {
  let component: EjecutivoCuentaPage;
  let fixture: ComponentFixture<EjecutivoCuentaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjecutivoCuentaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjecutivoCuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
