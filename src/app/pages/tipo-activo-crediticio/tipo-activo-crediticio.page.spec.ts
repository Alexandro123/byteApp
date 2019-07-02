import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoActivoCrediticioPage } from './tipo-activo-crediticio.page';

describe('TipoActivoCrediticioPage', () => {
  let component: TipoActivoCrediticioPage;
  let fixture: ComponentFixture<TipoActivoCrediticioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoActivoCrediticioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoActivoCrediticioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
