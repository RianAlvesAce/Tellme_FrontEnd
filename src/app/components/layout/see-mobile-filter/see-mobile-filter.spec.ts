import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeMobileFilter } from './see-mobile-filter';

describe('SeeMobileFilter', () => {
  let component: SeeMobileFilter;
  let fixture: ComponentFixture<SeeMobileFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeMobileFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeMobileFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
