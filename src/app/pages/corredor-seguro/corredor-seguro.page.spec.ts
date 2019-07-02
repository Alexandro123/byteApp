import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorredorSeguroPage } from './corredor-seguro.page';

describe('CorredorSeguroPage', () => {
  let component: CorredorSeguroPage;
  let fixture: ComponentFixture<CorredorSeguroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorredorSeguroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorredorSeguroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
