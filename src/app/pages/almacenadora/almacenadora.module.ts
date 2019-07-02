import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlmacenadoraPage, ModalPage, EditarPage, VerPage, EliminarPage } from './almacenadora.page';
//import { ModalPage } from './modal.page';
//import { ModalPageModule } from './modal.module';


const routes: Routes = [
  {
    path: '',
    component: AlmacenadoraPage
  }
];

@NgModule({
  entryComponents: [
    ModalPage,
    EditarPage,
    VerPage,
    EliminarPage
 
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
   // ModalPageModule
  ],
  declarations: [
    AlmacenadoraPage,
    ModalPage,
    EditarPage,
    VerPage,
    EliminarPage
  ]
})
export class AlmacenadoraPageModule {}
