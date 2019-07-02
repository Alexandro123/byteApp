import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivosAjustePage } from './motivos-ajuste.page';

describe('MotivosAjustePage', () => {
  let component: MotivosAjustePage;
  let fixture: ComponentFixture<MotivosAjustePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotivosAjustePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivosAjustePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
