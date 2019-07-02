import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinosPage } from './destinos.page';

describe('DestinosPage', () => {
  let component: DestinosPage;
  let fixture: ComponentFixture<DestinosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
