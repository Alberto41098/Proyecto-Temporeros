import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoXlTemporerosComponent } from './logo-xl-temporeros.component';

describe('LogoXlTemporerosComponent', () => {
  let component: LogoXlTemporerosComponent;
  let fixture: ComponentFixture<LogoXlTemporerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoXlTemporerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoXlTemporerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
