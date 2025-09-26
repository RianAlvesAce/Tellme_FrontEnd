import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradorCard } from './colaborador-card';

describe('ColaboradorCard', () => {
  let component: ColaboradorCard;
  let fixture: ComponentFixture<ColaboradorCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColaboradorCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColaboradorCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
