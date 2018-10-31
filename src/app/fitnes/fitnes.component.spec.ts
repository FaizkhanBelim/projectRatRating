import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnesComponent } from './fitnes.component';

describe('FitnesComponent', () => {
  let component: FitnesComponent;
  let fixture: ComponentFixture<FitnesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
