import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MotivoDeReversaPage } from './motivo-de-reversa.page';

const routes: Routes = [
  {
    path: '',
    component: MotivoDeReversaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MotivoDeReversaPage]
})
export class MotivoDeReversaPageModule {}
