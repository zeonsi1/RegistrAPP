import { ComponentFixture, TestBed, async, fakeAsync, tick, flush } from '@angular/core/testing';
import { SigninPage } from './signin.page';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { DjangoService } from '../service/django.service';
import { FormsModule, ReactiveFormsModule, ValidatorFn, AbstractControl } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Storage } from '@ionic/storage-angular';
import { IonicModule } from '@ionic/angular';
import { of, throwError } from 'rxjs';
import { ProfesorPage } from '../profesor/profesor.page';
import { HomePage } from '../home/home.page';

describe('SigninPage', () => {
  let component: SigninPage;
  let fixture: ComponentFixture<SigninPage>;
  let djangoService: jasmine.SpyObj<DjangoService>;
  let router: Router;

  beforeEach(async() => {
    const djangoServiceSpy = jasmine.createSpyObj('DjangoService', ['postData']);
    
    TestBed.configureTestingModule({
      declarations:[SigninPage],
      imports:[RouterTestingModule.withRoutes([{ path: 'profesor', component: ProfesorPage}, { path: 'home', component: HomePage}]),
               ReactiveFormsModule,
               FormsModule,
               HttpClientTestingModule,
               IonicModule.forRoot()],
      providers:[{provide: DjangoService, useValue: djangoServiceSpy},
                 Storage]
    }).compileComponents;

    fixture = TestBed.createComponent(SigninPage);
    component = fixture.componentInstance;
    djangoService = TestBed.inject(DjangoService) as jasmine.SpyObj<DjangoService>;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to /profesor when tipo_usuario = 1', fakeAsync(() => {
    const mockResponse = { tipo_usuario: 1 };
    djangoService.postData.and.returnValue(of(mockResponse));
    spyOn(router, 'navigate')

    component.goTo();
    tick();
    fixture.detectChanges();

    expect(router.navigate).toHaveBeenCalledWith(['/profesor'],  {
      state: { nombre: 'undefined undefined', id: undefined }});
  }));

  it('should redirect to /home when tipo_usuario = 2', fakeAsync(() => {
    const mockResponse = { tipo_usuario: 2 };
    djangoService.postData.and.returnValue(of(mockResponse));
    spyOn(router, 'navigate')

    component.goTo();
    tick();
    fixture.detectChanges();

    expect(router.navigate).toHaveBeenCalledWith(['/home'],  {
      state: { nombre: 'undefined undefined', id: undefined }});
    flush()
  }))

  it('should create the form correctly', fakeAsync(() => {
    component.crearFormulario();
  
    expect(component.forma).toBeTruthy();
  
    if (component.forma) {
      const usuarioControl = component.forma.get('usuario');
      const passControl = component.forma.get('pass');
  
      expect(usuarioControl).toBeTruthy();
      expect(passControl).toBeTruthy();
  
      const validatorFnUsuario = usuarioControl?.validator;
      const validatorFnPass = passControl?.validator;
  
      expect(validatorFnUsuario).toBeTruthy();
      expect(validatorFnPass).toBeTruthy();
  
      if (validatorFnUsuario && validatorFnPass) {
        const validationResultUsuario = validatorFnUsuario({} as any);
        const validationResultPass = validatorFnPass({} as any);
  
        expect(validationResultUsuario).toEqual({ required: true });
        expect(validationResultPass).toEqual({ required: true });
      }
    }
  }));

  it('should create the form with the required controls', fakeAsync(() => {
    expect(component.forma).toBeDefined();

    const usuarioControl = component.forma?.get('usuario');
    const passControl = component.forma?.get('pass');
    expect(usuarioControl).toBeDefined();
    expect(passControl).toBeDefined();
  
    const usuarioValidators = usuarioControl?.validator as ValidatorFn | null;

    const isUsuarioRequired = usuarioValidators?.(usuarioControl as AbstractControl) ? true : false;
    const isUsuarioMinLengthValid = usuarioControl?.value ? usuarioControl.value.length >= 5 : true;;

    const isPassRequired = passControl?.hasError('required') ?? true;

    console.log('isUsuarioRequired:', isUsuarioRequired);
    console.log('isUsuarioMinLengthValid:', isUsuarioMinLengthValid);
    console.log('isPassRequired:', isPassRequired);

    expect(isUsuarioRequired).toBe(true);
    expect(isUsuarioMinLengthValid).toBe(true);
    expect(isPassRequired).toBe(true);
  }));

  it('should handle invalid credentials and show error message', fakeAsync(() => {
    const errorResponse = { status: 400, message: 'Credenciales inválidas' };
    djangoService.postData.and.returnValue(throwError(errorResponse));

    spyOn(console, 'error'); 

    component.goTo();
    tick();
    fixture.detectChanges();
    tick(); 

    expect(component.mensaje).toBe('Credenciales inválidas');
    expect(console.error).toHaveBeenCalled();
    flush();
  }));

  it('should handle internal server error and show error message', fakeAsync(() => {
    const errorResponse = { status: 500, message: 'Error interno del servidor' };
    djangoService.postData.and.returnValue(throwError(errorResponse));

    spyOn(console, 'error'); 

    component.goTo();
    tick();
    fixture.detectChanges();
    tick(); 

    expect(component.mensaje).toBe('Error interno del servidor');
    expect(console.error).toHaveBeenCalled();
    flush();
  }));
});

