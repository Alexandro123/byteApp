import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotariosPage } from './notarios.page';

describe('NotariosPage', () => {
  let component: NotariosPage;
  let fixture: ComponentFixture<NotariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotariosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
