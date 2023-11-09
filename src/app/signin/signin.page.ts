import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DjangoService } from '../service/django.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  checkBo: boolean = false;
  username: string = ''; 
  users: any;
  forma!: FormGroup;
  passw: string ='';
  mensaje: string = '';

  constructor(private router: Router, private djangoApi: DjangoService, private fb:FormBuilder, private authService: AuthService) {
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

  get usuarioNoValido(){
    return this.forma.get('usuario')?.invalid && this.forma.get('usuario')?.touched;
  }

  get contraNoValido(){
    return this.forma.get('pass')?.invalid && this.forma.get('pass')?.touched;
  }

  ngOnInit() {
  }
  
  goTo() {
    console.log(this.forma.value);
    this.authService.login();
    const data = { key: this.forma.value}
    this.djangoApi.postData(data).subscribe(response => {
      console.log('Respuesta del backend: ', response);
    });
    // for (let index = 0; index < users.length; index++) {     
    //   if ((users[index].nombre_usuario === this.forma.get('usuario')?.value) && (users[index].password_usuario === this.forma.get('pass')?.value)){
    //     let nombre: string ='';
    //     this.mensaje='';
    //     nombre = users[index].pnombre_usuario +" "+users[index].apaterno_usuario;
    //     this.authService.login();
    //     this.router.navigate(['/home'], {
    //       state: {user: nombre},
    //     })        
    //   }
    //   else {
    //     this.mensaje = 'Contraseña y/o Usuario Invalido';
    //     setTimeout(() => {
    //       this.mensaje='';
    //     }, 1000);
    //   }
    // }
  }

  check(e){
    if (e.currentTarget.checked){
      
    }
  }
}
