import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CobrosAdicionalesPage } from './cobros-adicionales.page';

const routes: Routes = [
  {
    path: '',
    component: CobrosAdicionalesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CobrosAdicionalesPage]
})
export class CobrosAdicionalesPageModule {}
