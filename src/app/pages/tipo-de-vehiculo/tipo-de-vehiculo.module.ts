import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TipoDeVehiculoPage } from './tipo-de-vehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: TipoDeVehiculoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TipoDeVehiculoPage]
})
export class TipoDeVehiculoPageModule {}
