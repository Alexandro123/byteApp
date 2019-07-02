import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TipoDeduccionPage } from './tipo-deduccion.page';

const routes: Routes = [
  {
    path: '',
    component: TipoDeduccionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TipoDeduccionPage]
})
export class TipoDeduccionPageModule {}
