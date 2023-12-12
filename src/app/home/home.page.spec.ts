import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { HomePage } from './home.page';
import { ScannerqrPage } from '../scannerqr/scannerqr.page';
import { AsistenciaPage } from '../asistencia/asistencia.page';
import { AuthService } from '../signin/auth.service';
import { Router } from '@angular/router';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let authService: jasmine.SpyObj<AuthService>;
  let router: Router;
  beforeEach(() => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['logout']);

    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule.withRoutes([
          { path: 'scannerqr', component: ScannerqrPage },
          { path: 'asistencia', component: AsistenciaPage },
        ]),
      ],
      providers: [
        { provide: AuthService, useValue: authServiceSpy }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    router = TestBed.inject(Router);
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply bounce', () => {
    expect(component.button).toBeTruthy();

    spyOn(component.renderer, 'addClass');
    spyOn(component.renderer, 'removeClass');

    component.applyBounce();

    expect(authService.logout).toHaveBeenCalled();
    expect(component.renderer.addClass).toHaveBeenCalledWith(component.button.nativeElement, 'bounce');
  });


  it('should navigate to scannerqr with correct state when goTo is called', () => {
    const routerSpy = spyOn(component.router, 'navigate');
    component.goTo();
    expect(routerSpy).toHaveBeenCalledWith(['/scannerqr'], { state: { id: component.id } });
  });

  it('should navigate to asistencia with correct state when asis is called', () => {
    const routerSpy = spyOn(component.router, 'navigate');
    component.asis();
    expect(routerSpy).toHaveBeenCalledWith(['/asistencia'], { state: { id: component.id } });
  });
});