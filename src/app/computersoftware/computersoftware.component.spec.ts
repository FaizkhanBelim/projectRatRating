import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputersoftwareComponent } from './computersoftware.component';

describe('ComputersoftwareComponent', () => {
  let component: ComputersoftwareComponent;
  let fixture: ComponentFixture<ComputersoftwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputersoftwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputersoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
