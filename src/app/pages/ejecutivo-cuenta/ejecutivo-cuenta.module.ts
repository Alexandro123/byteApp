import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EjecutivoCuentaPage } from './ejecutivo-cuenta.page';

const routes: Routes = [
  {
    path: '',
    component: EjecutivoCuentaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EjecutivoCuentaPage]
})
export class EjecutivoCuentaPageModule {}
