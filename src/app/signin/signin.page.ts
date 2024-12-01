import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DjangoService } from '../service/django.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  checkBo: boolean = false;
  users: any;
  forma!: FormGroup;
  mensaje: string = '';
  usuario: string = '';
  password: string = '';
  bcred_count: number = 0;
  bloqueo: boolean = false;  // Indicador de bloqueo por intentos fallidos

  constructor(private router: Router, private djangoApi: DjangoService, private fb: FormBuilder, private authService: AuthService, private storage: Storage) {
    this.crearFormulario();
  }

  crearFormulario() {
    this.forma = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(5)]],
      pass: ['', [Validators.required]],
    });
  }

  get usuarioNoValido() {
    return this.forma.get('usuario')?.invalid && this.forma.get('usuario')?.touched;
  }

  get contraNoValido() {
    return this.forma.get('pass')?.invalid && this.forma.get('pass')?.touched;
  }

  get tooManyTries() {
    return this.bcred_count >= 5; // Devuelve true si los intentos fallidos son 5 o más
  }

  async ngOnInit() {
    await this.storage.create();

    this.storage.get('usuario').then((val) => {
      this.usuario = val;
    });

    this.storage.get('password').then((val) => {
      this.password = val;
    });

    this.storage.get("checkBox").then((val) => {
      this.checkBo = val;
    });
  }

  check() {
    this.storage.set("checkBox", this.checkBo);
  }

  goTo() {
    if (this.bcred_count >= 5) {
      this.mensaje = 'Demasiados intentos incorrectos, espere 30 segundos para volverlo a intentar';
      setTimeout(() => {
        this.mensaje = '';
        this.bcred_count = 0; // Reiniciar contador de intentos después de 30 segundos
      }, 30000);  // 30 segundos de espera
      return; // No permitir más intentos hasta después de la espera
    }

    if (this.checkBo) {
      this.storage.set("usuario", this.forma.get("usuario")?.value);
      this.storage.set("password", this.forma.get("pass")?.value);
    } else {
      this.storage.remove("usuario");
      this.storage.remove("password");
    }

    this.djangoApi.postData(this.forma.value).subscribe(
      (response) => {
        if (response.tipo_usuario == 2) {
          this.authService.login();
          let id: number = response.id_usuario;
          let nombre: string = response.pnombre_usuario + ' ' + response.apaterno_usuario;
          this.router.navigate(['/home'], {
            state: { nombre: nombre, id: id },
          });
        } else if (response.tipo_usuario == 1) {
          this.authService.login();
          let nombre: string = response.pnombre_usuario + ' ' + response.apaterno_usuario;
          let id: number = response.id_profesor;
          this.router.navigate(['/profesor'], {
            state: { nombre: nombre, id: id }
          });
        }

        this.mensaje = '';
      },
      (error) => {
        console.error('Error durante el inicio de sesión:', error);
        if (error.status === 400) {
          this.mensaje = 'Credenciales inválidas';
          setTimeout(() => {
            this.mensaje = '';
          }, 5000);
          this.bcred_count += 1; // Aumentar el contador de intentos
          if (this.bcred_count >= 5) {
            this.mensaje = 'Demasiados intentos incorrectos, espere 30 segundos para volverlo a intentar';
            setTimeout(() => {
              this.mensaje = '';
              this.bcred_count = 0; // Reiniciar contador después de 30 segundos
            }, 30000);
          }
        } else if (error.status === 500) {
          this.mensaje = 'Error interno del servidor';
          setTimeout(() => {
            this.mensaje = '';
          }, 5000);
        }
      }
    );
  }
}