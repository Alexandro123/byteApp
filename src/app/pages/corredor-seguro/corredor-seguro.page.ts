import { Component, OnInit } from '@angular/core';
import { CorredorSeguroService } from 'src/app/services/corredor-seguro.service';
import { CorredorSeguro } from 'src/app/models/corredorSeguro.model';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-corredor-seguro',
  templateUrl: './corredor-seguro.page.html',
  styleUrls: ['./corredor-seguro.page.scss'],
  providers: [CorredorSeguroService]
})
export class CorredorSeguroPage implements OnInit {

  public corredor: CorredorSeguro;
  public status;

  constructor(public _corredorSeguroService: CorredorSeguroService,
    public actionSheetController: ActionSheetController) { 

  }

  //ActionSheetController
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Corredor Seguro',
      buttons: [{
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        cssClass: 'rojo',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Editar',
        icon: 'create',
        cssClass: 'azul',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Ver',
        icon: 'eye',
        cssClass: 'celeste',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  //end ActionSheetController

  ngOnInit() {
    this.listaCorredorSeguro()
  }

  listaCorredorSeguro(){
    this._corredorSeguroService.getCorredoresSeguros().subscribe(
      response=>{
        this.corredor = response;
      }

    )
  }

}
