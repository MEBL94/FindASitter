import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBabyComponent } from './display-baby.component';

describe('DisplayBabyComponent', () => {
  let component: DisplayBabyComponent;
  let fixture: ComponentFixture<DisplayBabyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayBabyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBabyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
