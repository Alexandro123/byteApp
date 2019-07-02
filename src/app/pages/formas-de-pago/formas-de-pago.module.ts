import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormasDePagoPage } from './formas-de-pago.page';

const routes: Routes = [
  {
    path: '',
    component: FormasDePagoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormasDePagoPage]
})
export class FormasDePagoPageModule {}
