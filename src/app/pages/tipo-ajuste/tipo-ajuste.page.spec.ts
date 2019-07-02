import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoAjustePage } from './tipo-ajuste.page';

describe('TipoAjustePage', () => {
  let component: TipoAjustePage;
  let fixture: ComponentFixture<TipoAjustePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoAjustePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoAjustePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
