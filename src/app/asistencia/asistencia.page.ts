import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DjangoService } from '../service/django.service';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {
  id: number = 0;
  ramo: any;

  constructor(private router: Router, private djangoApi: DjangoService) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if(state && state['id']){
      this.id = state['id'];
    };
    const obj = {
      id: this.id,
    };
    this.djangoApi.postAsisA(obj).subscribe(
      (response)=>{
        this.ramo = response;
      }
    );
  }

  ngOnInit() {
  }


}
