import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EstadoResolucionPage } from './estado-resolucion.page';

const routes: Routes = [
  {
    path: '',
    component: EstadoResolucionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EstadoResolucionPage]
})
export class EstadoResolucionPageModule {}
