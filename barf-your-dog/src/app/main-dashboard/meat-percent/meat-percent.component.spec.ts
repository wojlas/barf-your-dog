import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeatPercentComponent } from './meat-percent.component';

describe('MeatPercentComponent', () => {
  let component: MeatPercentComponent;
  let fixture: ComponentFixture<MeatPercentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeatPercentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeatPercentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
