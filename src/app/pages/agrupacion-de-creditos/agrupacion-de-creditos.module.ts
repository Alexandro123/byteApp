import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AgrupacionDeCreditosPage } from './agrupacion-de-creditos.page';

const routes: Routes = [
  {
    path: '',
    component: AgrupacionDeCreditosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AgrupacionDeCreditosPage]
})
export class AgrupacionDeCreditosPageModule {}
