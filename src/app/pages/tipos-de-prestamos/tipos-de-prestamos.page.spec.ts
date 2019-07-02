import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposDePrestamosPage } from './tipos-de-prestamos.page';

describe('TiposDePrestamosPage', () => {
  let component: TiposDePrestamosPage;
  let fixture: ComponentFixture<TiposDePrestamosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposDePrestamosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposDePrestamosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
