import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgEmpresaComponent } from './img-empresa.component';

describe('ImgEmpresaComponent', () => {
  let component: ImgEmpresaComponent;
  let fixture: ComponentFixture<ImgEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
