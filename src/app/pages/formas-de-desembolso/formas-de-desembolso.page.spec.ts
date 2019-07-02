import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormasDeDesembolsoPage } from './formas-de-desembolso.page';

describe('FormasDeDesembolsoPage', () => {
  let component: FormasDeDesembolsoPage;
  let fixture: ComponentFixture<FormasDeDesembolsoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormasDeDesembolsoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormasDeDesembolsoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
