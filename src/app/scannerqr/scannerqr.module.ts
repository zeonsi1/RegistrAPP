import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ScannerqrPageRoutingModule } from './scannerqr-routing.module';

import { ScannerqrPage } from './scannerqr.page';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScannerqrPageRoutingModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [ScannerqrPage]
})
export class ScannerqrPageModule {}
