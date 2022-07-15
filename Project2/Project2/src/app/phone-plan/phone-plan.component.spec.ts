import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonePlanComponent } from './phone-plan.component';

describe('PhonePlanComponent', () => {
  let component: PhonePlanComponent;
  let fixture: ComponentFixture<PhonePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonePlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhonePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
