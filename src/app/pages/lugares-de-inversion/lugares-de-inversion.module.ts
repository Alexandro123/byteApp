import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LugaresDeInversionPage } from './lugares-de-inversion.page';

const routes: Routes = [
  {
    path: '',
    component: LugaresDeInversionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LugaresDeInversionPage]
})
export class LugaresDeInversionPageModule {}
