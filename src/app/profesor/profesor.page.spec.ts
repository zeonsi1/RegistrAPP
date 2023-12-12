import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ProfesorPage } from './profesor.page';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { ClasesPage } from '../clases/clases.page';

describe('ProfesorPage', () => {
  let component: ProfesorPage;
  let fixture: ComponentFixture<ProfesorPage>;
  let router: Router;
  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations:[ProfesorPage],
      imports:[RouterTestingModule.withRoutes([{ path:'clases', component: ClasesPage}]),
               IonicModule.forRoot()]
    })

    fixture = TestBed.createComponent(ProfesorPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to /clases', fakeAsync(() => {
    spyOn(router, 'navigate').and.callThrough();

    component.enviar();
    fixture.detectChanges();

    expect(router.navigate).toHaveBeenCalledWith(['/clases'], { state: { id: 0 }});
  }));
});
