import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestorepassPage } from './restorepass.page';

describe('RestorepassPage', () => {
  let component: RestorepassPage;
  let fixture: ComponentFixture<RestorepassPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(RestorepassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
