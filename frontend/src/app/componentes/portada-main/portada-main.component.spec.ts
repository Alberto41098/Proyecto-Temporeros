import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadaMainComponent } from './portada-main.component';

describe('PortadaMainComponent', () => {
  let component: PortadaMainComponent;
  let fixture: ComponentFixture<PortadaMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortadaMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortadaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
