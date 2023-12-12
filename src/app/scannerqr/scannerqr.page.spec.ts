import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScannerqrPage } from './scannerqr.page';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ScannerqrPage', () => {
  let component: ScannerqrPage;
  let fixture: ComponentFixture<ScannerqrPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations:[ScannerqrPage],
      imports:[RouterTestingModule,
               HttpClientTestingModule]
    })
    fixture = TestBed.createComponent(ScannerqrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
