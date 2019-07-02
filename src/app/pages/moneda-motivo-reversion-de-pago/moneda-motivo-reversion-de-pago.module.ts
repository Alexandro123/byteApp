import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MonedaMotivoReversionDePagoPage } from './moneda-motivo-reversion-de-pago.page';

const routes: Routes = [
  {
    path: '',
    component: MonedaMotivoReversionDePagoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MonedaMotivoReversionDePagoPage]
})
export class MonedaMotivoReversionDePagoPageModule {}
