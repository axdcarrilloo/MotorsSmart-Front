import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogWaringComponent } from './dialog-waring.component';

describe('DialogWaringComponent', () => {
  let component: DialogWaringComponent;
  let fixture: ComponentFixture<DialogWaringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogWaringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogWaringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
