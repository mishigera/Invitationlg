import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TfkadminPage } from './tfkadmin.page';

describe('TfkadminPage', () => {
  let component: TfkadminPage;
  let fixture: ComponentFixture<TfkadminPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TfkadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
