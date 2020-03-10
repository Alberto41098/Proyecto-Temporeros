import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgUsuarioComponent } from './img-usuario.component';

describe('ImgUsuarioComponent', () => {
  let component: ImgUsuarioComponent;
  let fixture: ComponentFixture<ImgUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
