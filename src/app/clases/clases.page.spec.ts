import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ClasesPage } from './clases.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DjangoService } from '../service/django.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

describe('ClasesPage', () => {
  let component: ClasesPage;
  let fixture: ComponentFixture<ClasesPage>;
  let djangoService: jasmine.SpyObj<DjangoService>;
  let router: Router;

  beforeEach(() => {
    const djangoServiceSpy = jasmine.createSpyObj('DjangoService', ['postData', 'postAsis', 'putAsis']);
    djangoServiceSpy.postAsis.and.returnValue(of({id:1}));
    djangoServiceSpy.putAsis.and.returnValue(of({id:1}));

    TestBed.configureTestingModule({
      declarations: [ClasesPage],
      imports: [HttpClientTestingModule, RouterTestingModule, IonicModule.forRoot()],
      providers: [
        { provide: DjangoService, useValue: djangoServiceSpy },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 1 }),
            snapshot: { paramMap: convertToParamMap({ id: 1 }) },
          },
        },
      ],
    });

    fixture = TestBed.createComponent(ClasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    djangoService = TestBed.inject(DjangoService) as jasmine.SpyObj<DjangoService>;
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to /qr with correct state', fakeAsync(() => {
    spyOn(router, 'navigate');
  
    const mockResponse = { id_clase: 1 };
    component.goTo(mockResponse);
    tick();
    fixture.detectChanges();
  
    expect(router.navigate).toHaveBeenCalledWith(['/qr'], { state: { id_clase: 1 }});
  }));

  it('should call putAsis method with correct parameters', fakeAsync(() => {
    spyOn(router, 'navigate');
  
    const mockResponse = { id_clase: 1 };
    component.goTo(mockResponse);
    tick();
    fixture.detectChanges();
  
    expect(djangoService.putAsis).toHaveBeenCalledWith({
      id: mockResponse.id_clase,
      fecha: new Date().toLocaleDateString(),
      total: 1,
    });
  }));

  it('should call postAsis method on ngOnInit', fakeAsync(() => {
    fixture.detectChanges();
    tick();

    expect(djangoService.postAsis).toHaveBeenCalledWith({ id: component.id });
  }));

});