import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoResolucionPage } from './estado-resolucion.page';

describe('EstadoResolucionPage', () => {
  let component: EstadoResolucionPage;
  let fixture: ComponentFixture<EstadoResolucionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoResolucionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoResolucionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
