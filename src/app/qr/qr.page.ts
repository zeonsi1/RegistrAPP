import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {
  id: string = '';
  public qrAngular!: string;
  constructor(private router: Router) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if(state && state['id_clase']){
      this.id = state['id_clase'];
    };
  }

  ngOnInit(): void{
    if(this.id){
      this.qrAngular = `id: ${this.id}`;
    }else{
      this.qrAngular = 'Missing information';
    }
  }

  enviar(){
    this.router.navigate(['/clases'],{
      state: {id: this.id}
    });
  }
}
