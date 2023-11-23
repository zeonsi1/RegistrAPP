import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { DjangoService } from '../service/django.service';
@Component({
  selector: 'app-scannerqr',
  templateUrl: './scannerqr.page.html',
  styleUrls: ['./scannerqr.page.scss'],
})
export class ScannerqrPage implements OnInit {
  scanActivate: boolean = false;
  id: number = 0;

  constructor(private router: Router, private djangoApi: DjangoService) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if(state && state['id']){
      this.id = state['id'];
    }
  }

  ngOnInit() {
  }

  async checkPermission() {
    return new Promise(async (resolve, reject) => {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        resolve(true);
      } else if (status.denied) {
        BarcodeScanner.openAppSettings();
        resolve(false);
      }
    });
  }

  async startScanner() {
    const allowed = await this.checkPermission();

    if (allowed) {
      this.scanActivate = true;
      BarcodeScanner.hideBackground();
  
      const result = await BarcodeScanner.startScan();
  
      if (result.hasContent) {
        this.scanActivate = false;
        const classId = this.extractClassId(result.content);
        const fecha = new Date().toLocaleDateString();
        if (classId !== null) {
          let data = {
            id: classId,
            idAlumno: this.id,
            asis: 1,
            fecha: fecha,
          };
          this.djangoApi.putAsisA(data).subscribe(
            (response) => {
              alert(response.mensaje);
            },
            (error)=>{          
              alert(error.mensaje)
            }
          );
        } else {
          alert('El formato del código QR no contiene un ID válido.');
          // Puedes decidir qué hacer en este caso, como volver a escanear o mostrar un mensaje al usuario.
        }
      } else {
        alert('NO DATA FOUND!');
      }
    } else {
      alert('NOT ALLOWED!');
    }
  }

  stopScanner() {
    BarcodeScanner.startScan();
    this.scanActivate = false;
  }
  
  ionViewWillLeave() {
    BarcodeScanner.stopScan();
    this.scanActivate = false;
  }

  extractClassId(qrContent: string): string | null {
    // Implementa la lógica para extraer el identificador de clase desde el contenido del QR
    // Puedes usar expresiones regulares, dividir el contenido, o el método que se ajuste a tus necesidades
    // Aquí hay un ejemplo muy básico
    const match = qrContent.match(/id:\s*(ASY\d{4}-\d{3}[A-Za-z])/);
    return match ? match[1] : null;
  }
}
