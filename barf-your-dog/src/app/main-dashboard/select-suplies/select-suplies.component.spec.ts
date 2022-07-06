import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSupliesComponent } from './select-suplies.component';

describe('SelectSupliesComponent', () => {
  let component: SelectSupliesComponent;
  let fixture: ComponentFixture<SelectSupliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSupliesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSupliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
