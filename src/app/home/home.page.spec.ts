import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { HomePage } from './home.page';

import { DjangoService } from '../service/django.service';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// describe('HomePage', () => {
//   let httpClient: HttpClient;
//   let httpTestingController: HttpTestingController;
//   let djangoService: DjangoService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [DjangoService],
//     });

//     httpClient = TestBed.get(HttpClient);
//     httpTestingController = TestBed.get(HttpTestingController);
//     djangoService = new DjangoService(httpClient);
//   });
  
//   it('exists', inject([DjangoService], (service: DjangoService) => {
//     expect(service).toBeTruthy();
//   }))

//   describe('location', () => {
//     it('gets the ')
//   })
// })
