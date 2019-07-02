import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivoDeReversaPage } from './motivo-de-reversa.page';

describe('MotivoDeReversaPage', () => {
  let component: MotivoDeReversaPage;
  let fixture: ComponentFixture<MotivoDeReversaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotivoDeReversaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivoDeReversaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
