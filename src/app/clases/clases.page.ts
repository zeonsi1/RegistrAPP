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
        console.log('respuesta del backend', response);
      }
    )
  }

  ngOnInit() {
  }

}
