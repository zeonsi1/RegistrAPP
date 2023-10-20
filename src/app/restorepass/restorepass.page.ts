import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DjangoService } from '../service/django.service';

@Component({
  selector: 'app-restorepass',
  templateUrl: './restorepass.page.html',
  styleUrls: ['./restorepass.page.scss'],
})
export class RestorepassPage implements OnInit {
  forma!:FormGroup;
  users: any;
  mensaje: string = '';
  constructor(private fb:FormBuilder, private django: DjangoService) { 
    this.crearFormulario()
    this.django.getUsuarios().subscribe(
      (usuarios)=>{
        console.log(usuarios);
        this.users = usuarios;
      }
      ,
      (error)=>{
        console.log(error);
      }
    )
  }

  ngOnInit() {
  }

  get usuarioNoValido(){
    return this.forma.get('usuario')?.invalid && this.forma.get('usuario')?.touched;
  }

  get pass1NoValido(){
    return this.forma.get('pass1')?.invalid && this.forma.get('pass1')?.touched;
  }

  get pass2NoValido(){
    return this.forma.get('pass2')?.invalid && this.forma.get('pass2')?.touched;
  }


  crearFormulario(){
    this.forma = this.fb.group({
      usuario:['',[Validators.required, Validators.minLength(5)]],
      pass1:['',[Validators.required, Validators.minLength(4), Validators.maxLength(12)]],
      pass2:['',[Validators.required]],
    },
    {
      validators:this.Match('pass1', 'pass2'),
    }
    )
  }

  Match(pass1Name:string, pass2Name:string){
    return (formGroup: FormGroup) =>{
      const control = formGroup.controls[pass1Name];
      const matchControl = formGroup.controls[pass2Name];
      if(matchControl.errors && matchControl.errors['Match']){
        return;
      }
      if(control.value != matchControl.value){
        matchControl.setErrors({Match:true});
      }
      else {
        matchControl.setErrors(null);
      }
    }
  }

  
  enviar(users){
    for (let index = 0; index < users.length; index++) {
      if(users[index].nombre_usuario == this.forma.get('usuario')?.value){

      }
      else {
        this.mensaje = 'Usuario Invalido';
        setTimeout(() => {
          this.mensaje='';
        }, 5000);
      }
    }
  }
}
