import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngenierosValuadoresPage } from './ingenieros-valuadores.page';

describe('IngenierosValuadoresPage', () => {
  let component: IngenierosValuadoresPage;
  let fixture: ComponentFixture<IngenierosValuadoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngenierosValuadoresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngenierosValuadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
