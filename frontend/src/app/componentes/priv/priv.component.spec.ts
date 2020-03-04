import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivComponent } from './priv.component';

describe('PrivComponent', () => {
  let component: PrivComponent;
  let fixture: ComponentFixture<PrivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
