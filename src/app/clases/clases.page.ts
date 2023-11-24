import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DjangoService } from '../service/django.service';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.page.html',
  styleUrls: ['./clases.page.scss'],
})
export class ClasesPage implements OnInit {
  id: number = 0;
  ramo: any;

  constructor(private router: Router, private djangoApi: DjangoService) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if(state && state['id']){
      this.id = state['id'];
    };
    let obj ={
      id: this.id
    };
    this.djangoApi.postAsis(obj).subscribe(
      (response)=>{
        this.ramo = response;
      }
    );
  }

  ngOnInit() {
  }

  goTo(r: any){
    const fecha = new Date().toLocaleDateString();
    
    let obj = {
      id: r.id_clase,
      fecha: fecha,
      total: 1,
    };

    this.djangoApi.putAsis(obj).subscribe(
      (response)=>{
      }
    );

    this.router.navigate(['/qr'], {
      state: {id_clase: r.id_clase}
    });
  }
}
