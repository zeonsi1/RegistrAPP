import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsistenciaPage } from './asistencia.page';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AsistenciaPage', () => {
  let component: AsistenciaPage;
  let fixture: ComponentFixture<AsistenciaPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations:[AsistenciaPage],
      imports:[RouterTestingModule,
               HttpClientTestingModule]
    })
    fixture = TestBed.createComponent(AsistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
