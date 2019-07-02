import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DiasInhabilesPage } from './dias-inhabiles.page';

const routes: Routes = [
  {
    path: '',
    component: DiasInhabilesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DiasInhabilesPage]
})
export class DiasInhabilesPageModule {}
