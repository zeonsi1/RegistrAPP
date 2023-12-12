import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DjangoService } from './django.service';

describe('DjangoService', () => {
  let service: DjangoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DjangoService]
    });

    service = TestBed.inject(DjangoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send POST request to /api/users/ for postData', () => {
    const testData = { usuario: 'nombredeusuario',
                       pass: 'contraseña123' };
    service.postData(testData).subscribe();

    const req = httpTestingController.expectOne(`${service.apiURL}/users/`);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(testData);

    req.flush({ testData });
  });

  it('should send PUT request to /api/users/ for putPass', () => {
    const testData = { usuario: 'nombredeusuario',
                       pass1: 'contraseña123',
                       pass2: 'contraseña123'};
    service.putPass(testData).subscribe();

    const req = httpTestingController.expectOne(`${service.apiURL}/users/`);
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual(testData);

    req.flush({ testData });
  });

  it('should send POST request to /api/asistencia/ for postAsis', () => {
    const testData = { id:1,
                       fecha: new Date().toLocaleDateString(),
                       total:1 };
    service.postAsis(testData).subscribe();

    const req = httpTestingController.expectOne(`${service.apiURL}/asistencia/`);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(testData);


    req.flush({ testData });
  });

  it('should send PUT request to /api/asistencia/ for putAsis', () => {

    const testData = { 
      id: 1, 
      total:1,
      fecha: new Date().toLocaleDateString(),
    };
  
    service.putAsis(testData).subscribe();
  
    const req = httpTestingController.expectOne(`${service.apiURL}/asistencia/`);
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual(testData);
  
    req.flush({ testData });
  });

  it('should send PUT request to /api/asistenciaA/ for putAsisA', () => {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    const testData = { 
      id: 1, 
      idAlumno:1,
      asis: 1,
      fecha: new Date().toLocaleDateString(),
      hora : formattedTime
    };
  
    service.putAsisA(testData).subscribe();
  
    const req = httpTestingController.expectOne(`${service.apiURL}/asistenciaA/`);
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual(testData);
  
    req.flush({ testData });
  });

  it('should send POST request to /api/asistenciaA/ for postAsisA', () => {
    const testData = { 
      idClase: 1, // Reemplaza con la ID de la clase que desees usar para la prueba
      fecha: new Date().toLocaleDateString(), // Utiliza la fecha actual o una fecha específica para la prueba
      total: 42, // Reemplaza con el valor que desees para la prueba
    };
  
    service.postAsisA(testData).subscribe();
  
    const req = httpTestingController.expectOne(`${service.apiURL}/asistenciaA/`);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(testData);
  
    req.flush({ /* ... your mocked response ... */ });
  });
});