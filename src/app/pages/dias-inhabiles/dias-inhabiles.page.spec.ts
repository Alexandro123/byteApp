import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiasInhabilesPage } from './dias-inhabiles.page';

describe('DiasInhabilesPage', () => {
  let component: DiasInhabilesPage;
  let fixture: ComponentFixture<DiasInhabilesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiasInhabilesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiasInhabilesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
