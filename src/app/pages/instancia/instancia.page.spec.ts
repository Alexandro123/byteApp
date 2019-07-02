import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanciaPage } from './instancia.page';

describe('InstanciaPage', () => {
  let component: InstanciaPage;
  let fixture: ComponentFixture<InstanciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanciaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
