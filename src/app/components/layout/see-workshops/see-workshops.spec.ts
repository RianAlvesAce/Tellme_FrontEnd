import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeWorkshops } from './see-workshops';

describe('SeeWorkshops', () => {
  let component: SeeWorkshops;
  let fixture: ComponentFixture<SeeWorkshops>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeWorkshops]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeWorkshops);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
