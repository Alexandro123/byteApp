import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormasDeDesembolsoPage } from './formas-de-desembolso.page';

const routes: Routes = [
  {
    path: '',
    component: FormasDeDesembolsoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormasDeDesembolsoPage]
})
export class FormasDeDesembolsoPageModule {}
