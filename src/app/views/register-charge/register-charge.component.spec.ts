import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterChargeComponent } from './register-charge.component';

describe('RegisterChargeComponent', () => {
  let component: RegisterChargeComponent;
  let fixture: ComponentFixture<RegisterChargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterChargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
