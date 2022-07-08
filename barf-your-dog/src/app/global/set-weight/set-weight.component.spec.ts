import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetWeightComponent } from './set-weight.component';

describe('SetWeightComponent', () => {
  let component: SetWeightComponent;
  let fixture: ComponentFixture<SetWeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetWeightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
