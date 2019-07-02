import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionesPage } from './instituciones.page';

describe('InstitucionesPage', () => {
  let component: InstitucionesPage;
  let fixture: ComponentFixture<InstitucionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitucionesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitucionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
