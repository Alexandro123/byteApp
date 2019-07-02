import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatusAvaluosPage } from './estatus-avaluos.page';

describe('EstatusAvaluosPage', () => {
  let component: EstatusAvaluosPage;
  let fixture: ComponentFixture<EstatusAvaluosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstatusAvaluosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatusAvaluosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
