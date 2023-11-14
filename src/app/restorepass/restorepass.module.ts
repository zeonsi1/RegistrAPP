import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestorepassPageRoutingModule } from './restorepass-routing.module';

import { RestorepassPage } from './restorepass.page';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestorepassPageRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [RestorepassPage]
})
export class RestorepassPageModule {}
