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
    this.crearFormulario()
    console.log(this.forma.status)
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
    this.authService.login();
    this.djangoApi.postData(this.forma.value).subscribe(
      (response)=>{
        if(response.tipo_usuario == 2){
          this.authService.login();
          let nombre: string = response.pnombre_usuario + ' ' + response.apaterno_usuario;
          this.router.navigate(['/home'], {
            state: {nombre: nombre}
          });
        }
        else if(response.tipo_usuario == 1){
          this.authService.login();
          let nombre: string = response.pnombre_usuario + ' ' + response.apaterno_usuario;
          this.router.navigate(['/profesor'], {
            state: {nombre:nombre}
          });
        }
        this.mensaje = '';
      },
      (error)=>{
        if(error.status === 400){
          this.mensaje = 'Credenciales inválidas';
          setTimeout(() => {
            this.mensaje='';
          }, 5000);
        }
        else if(error.status === 500){
          this.mensaje = 'Error interno del servidor';
          setTimeout(() => {
            this.mensaje='';
          }, 5000);
        } 
      }
    );
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
