import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CorredorSeguroPage } from './corredor-seguro.page';

const routes: Routes = [
  {
    path: '',
    component: CorredorSeguroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CorredorSeguroPage]
})
export class CorredorSeguroPageModule {}
