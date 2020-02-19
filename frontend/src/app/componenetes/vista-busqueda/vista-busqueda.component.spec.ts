import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaBusquedaComponent } from './vista-busqueda.component';

describe('VistaBusquedaComponent', () => {
  let component: VistaBusquedaComponent;
  let fixture: ComponentFixture<VistaBusquedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaBusquedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
