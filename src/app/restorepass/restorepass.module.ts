import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestorepassPageRoutingModule } from './restorepass-routing.module';

import { RestorepassPage } from './restorepass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestorepassPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RestorepassPage]
})
export class RestorepassPageModule {}
