import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatusGarantiaRealPage } from './estatus-garantia-real.page';

describe('EstatusGarantiaRealPage', () => {
  let component: EstatusGarantiaRealPage;
  let fixture: ComponentFixture<EstatusGarantiaRealPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstatusGarantiaRealPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatusGarantiaRealPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
