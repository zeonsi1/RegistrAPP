import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { LoaderPage } from './loader.page';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SigninPage } from '../signin/signin.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderPage],
      imports: [HttpClientTestingModule,
        RouterTestingModule.withRoutes([{ path:'signin', component: SigninPage}]),
        IonicModule.forRoot()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to /signin after timeout', fakeAsync(() => {
    spyOn(router, 'navigate').and.callThrough();

    component.ngOnInit();
    
    fixture.detectChanges();
    tick(1000);

    expect(router.navigate).toHaveBeenCalledWith(['/signin']);
  }));
});