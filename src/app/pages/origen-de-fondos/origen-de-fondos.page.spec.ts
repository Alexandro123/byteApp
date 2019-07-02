import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrigenDeFondosPage } from './origen-de-fondos.page';

describe('OrigenDeFondosPage', () => {
  let component: OrigenDeFondosPage;
  let fixture: ComponentFixture<OrigenDeFondosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrigenDeFondosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrigenDeFondosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
