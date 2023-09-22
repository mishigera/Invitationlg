import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LesliemodePage } from './lesliemode.page';

describe('LesliemodePage', () => {
  let component: LesliemodePage;
  let fixture: ComponentFixture<LesliemodePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LesliemodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
