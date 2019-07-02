import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CobrosAdicionalesPage } from './cobros-adicionales.page';

describe('CobrosAdicionalesPage', () => {
  let component: CobrosAdicionalesPage;
  let fixture: ComponentFixture<CobrosAdicionalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CobrosAdicionalesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobrosAdicionalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
