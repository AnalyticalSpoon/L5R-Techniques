import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechniquesTableComponent } from './techniques-table.component';

describe('TechniquesTableComponent', () => {
  let component: TechniquesTableComponent;
  let fixture: ComponentFixture<TechniquesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechniquesTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechniquesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
