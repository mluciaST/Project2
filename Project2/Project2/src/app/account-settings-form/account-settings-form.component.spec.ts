import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingsFormComponent } from './account-settings-form.component';

describe('AccountSettingsFormComponent', () => {
  let component: AccountSettingsFormComponent;
  let fixture: ComponentFixture<AccountSettingsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSettingsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSettingsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
