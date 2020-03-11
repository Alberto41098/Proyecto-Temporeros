import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoHayNadaComponent } from './no-hay-nada.component';

describe('NoHayNadaComponent', () => {
  let component: NoHayNadaComponent;
  let fixture: ComponentFixture<NoHayNadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoHayNadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoHayNadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
