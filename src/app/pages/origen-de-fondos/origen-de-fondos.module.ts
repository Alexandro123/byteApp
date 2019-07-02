import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrigenDeFondosPage } from './origen-de-fondos.page';

const routes: Routes = [
  {
    path: '',
    component: OrigenDeFondosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrigenDeFondosPage]
})
export class OrigenDeFondosPageModule {}
