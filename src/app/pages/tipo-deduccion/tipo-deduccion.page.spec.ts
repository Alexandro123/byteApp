import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDeduccionPage } from './tipo-deduccion.page';

describe('TipoDeduccionPage', () => {
  let component: TipoDeduccionPage;
  let fixture: ComponentFixture<TipoDeduccionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoDeduccionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDeduccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
