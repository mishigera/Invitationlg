import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuxhomePage } from './auxhome.page';

describe('AuxhomePage', () => {
  let component: AuxhomePage;
  let fixture: ComponentFixture<AuxhomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AuxhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
