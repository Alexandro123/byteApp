import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TipoActivoCrediticioPage } from './tipo-activo-crediticio.page';

const routes: Routes = [
  {
    path: '',
    component: TipoActivoCrediticioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TipoActivoCrediticioPage]
})
export class TipoActivoCrediticioPageModule {}
