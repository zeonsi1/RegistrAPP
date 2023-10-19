import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DjangoService } from '../service/django.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  username: string = ''; 
  users: any;
  forma!: FormGroup;
  passw: string ='';
  constructor(private router: Router, private djangoApi: DjangoService, private fb:FormBuilder) {    
    this.djangoApi.getUsuarios().subscribe(
      (usuarios)=>{
        console.log(usuarios);
        this.users = usuarios;
        console.log(this.users);
      }
      ,
      (error)=>{
        console.log(error);
      }
    );
    this.crearFormulario()
  }

  crearFormulario(){
    this.forma = this.fb.group({
      usuario:['', [Validators.required, Validators.minLength(5)]],
      pass:['', [Validators.required]]  
    })
  }

  ngOnInit() {
  }
  
  goTo(users) {
    for (let index = 0; index < users.length; index++) {     
      if (users[index].nombre_usuario == this.username && users[index].password_usuario == this.passw){
        this.router.navigate(['/home'], {
          state: {user: users[index].direccion_usuario},
        })
      }
      
    }
  }
}
