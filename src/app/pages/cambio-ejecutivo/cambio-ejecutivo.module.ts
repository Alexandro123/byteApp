import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CambioEjecutivoPage } from './cambio-ejecutivo.page';

const routes: Routes = [
  {
    path: '',
    component: CambioEjecutivoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CambioEjecutivoPage]
})
export class CambioEjecutivoPageModule {}
