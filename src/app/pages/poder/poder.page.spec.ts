import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoderPage } from './poder.page';

describe('PoderPage', () => {
  let component: PoderPage;
  let fixture: ComponentFixture<PoderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
