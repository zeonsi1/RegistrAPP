import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DjangoService } from '../service/django.service';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  username: string = ''; 

  constructor(private router: Router, private djangoApi: DjangoService) {
    this.djangoApi.getUsuarios().subscribe(
      (usuarios)=>{
        console.log(usuarios);
      }
      ,
      (error)=>{
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }
  
  goTo() {
    this.router.navigate(['/home'], {
      state: {user: this.username},
    })
  }
}
