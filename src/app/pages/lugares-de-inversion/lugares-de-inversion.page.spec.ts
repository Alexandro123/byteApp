import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LugaresDeInversionPage } from './lugares-de-inversion.page';

describe('LugaresDeInversionPage', () => {
  let component: LugaresDeInversionPage;
  let fixture: ComponentFixture<LugaresDeInversionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LugaresDeInversionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LugaresDeInversionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
