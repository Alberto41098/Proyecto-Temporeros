import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselPortadaComponent } from './carrusel-portada.component';

describe('CarruselPortadaComponent', () => {
  let component: CarruselPortadaComponent;
  let fixture: ComponentFixture<CarruselPortadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarruselPortadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarruselPortadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
