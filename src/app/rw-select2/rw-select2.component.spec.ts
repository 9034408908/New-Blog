import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RwSelect2Component } from './rw-select2.component';

describe('RwSelect2Component', () => {
  let component: RwSelect2Component;
  let fixture: ComponentFixture<RwSelect2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RwSelect2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RwSelect2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
