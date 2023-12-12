import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { RestorepassPage } from './restorepass.page';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DjangoService } from '../service/django.service';
import { Storage } from '@ionic/storage-angular';
import { FormsModule, ReactiveFormsModule, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

describe('RestorepassPage', () => {
  let component: RestorepassPage;
  let fixture: ComponentFixture<RestorepassPage>;
  let djangoService: jasmine.SpyObj<DjangoService>;
  let router: Router;

  beforeEach(async() => {
    const djangoServiceSpy = jasmine.createSpyObj('DjangoService', ['postData']);

    TestBed.configureTestingModule({
      declarations:[RestorepassPage],
      imports:[RouterTestingModule,
               HttpClientTestingModule,
               ReactiveFormsModule,
               FormsModule,
               IonicModule.forRoot()],
      providers:[{provider: DjangoService, useValue: djangoServiceSpy},
                 Storage]
    }).compileComponents

    fixture = TestBed.createComponent(RestorepassPage);
    component = fixture.componentInstance;
    djangoService = TestBed.inject(DjangoService) as jasmine.SpyObj<DjangoService>;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the form correctly', fakeAsync(() => {
    component.crearFormulario();
  
    expect(component.forma).toBeTruthy();
  
    if (component.forma) {
      const usuarioControl = component.forma.get('usuario');
      const pass1Control = component.forma.get('pass1');
      const pass2Control = component.forma.get('pass2');

      expect(usuarioControl).toBeTruthy();
      expect(pass1Control).toBeTruthy();
      expect(pass2Control).toBeTruthy();
  
      const validatorFnUsuario = usuarioControl?.validator;
      const validatorFnPass1 = pass1Control?.validator;
      const validatorFnPass2 = pass2Control?.validator;

      expect(validatorFnUsuario).toBeTruthy();
      expect(validatorFnPass1).toBeTruthy();
      expect(validatorFnPass2).toBeTruthy();

      if (validatorFnUsuario && validatorFnPass1 && validatorFnPass2) {
        const validationResultUsuario = validatorFnUsuario({} as any);
        const validationResultPass1 = validatorFnPass1({} as any);
        const validationResultPass2 = validatorFnPass2({} as any);

        expect(validationResultUsuario).toEqual({ required: true });
        expect(validationResultPass1).toEqual({ required: true });
        expect(validationResultPass2).toEqual({ required: true });
      }
    }
  }));

  it('should create the form with the required controls', fakeAsync(() => {
    expect(component.forma).toBeDefined();

    const usuarioControl = component.forma?.get('usuario');
    const pass1Control = component.forma?.get('pass1');
    const pass2Control = component.forma?.get('pass2');

    expect(usuarioControl).toBeDefined();
    expect(pass1Control).toBeDefined();
    expect(pass2Control).toBeDefined();
  
    const usuarioValidators = usuarioControl?.validator as ValidatorFn | null;
    const pass1Validators = pass1Control?.validator as ValidatorFn | null;

    const isUsuarioRequired = usuarioValidators?.(usuarioControl as AbstractControl) ? true : false;
    const isUsuarioMinLengthValid = usuarioControl?.value ? usuarioControl.value.length >= 5 : true;

    const isPass1Required = pass1Control?.hasError('required') ?? true;
    const isPass1MinLengthValid = pass1Validators?.(pass1Control as AbstractControl) ? true : false;

    const isPass2Required = pass2Control?.hasError('required') ?? true;

    console.log('isUsuarioRequired:', isUsuarioRequired);
    console.log('isUsuarioMinLengthValid:', isUsuarioMinLengthValid);
    console.log('isPass1Required:', isPass1Required);
    console.log('isPass1MinLengthValid:', isPass1MinLengthValid);
    console.log('isPass2Required:', isPass2Required);

    expect(isUsuarioRequired).toBe(true);
    expect(isUsuarioMinLengthValid).toBe(true);
    expect(isPass1Required).toBe(true);
    expect(isPass1MinLengthValid).toBe(true);
    expect(isPass2Required).toBe(false);
  }));
});
