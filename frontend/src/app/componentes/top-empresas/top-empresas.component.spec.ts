import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopEmpresasComponent } from './top-empresas.component';

describe('TopEmpresasComponent', () => {
  let component: TopEmpresasComponent;
  let fixture: ComponentFixture<TopEmpresasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopEmpresasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
