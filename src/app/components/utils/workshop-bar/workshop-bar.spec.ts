import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopBar } from './workshop-bar';

describe('WorkshopBar', () => {
  let component: WorkshopBar;
  let fixture: ComponentFixture<WorkshopBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkshopBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkshopBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
