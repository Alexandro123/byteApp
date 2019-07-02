import { Component, OnInit } from '@angular/core';
import { FormasDeDesembolsoService } from 'src/app/services/formas-de-desembolso.service';
import { FormasDeDesembolso } from 'src/app/models/formasDeDesembolso.model';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-formas-de-desembolso',
  templateUrl: './formas-de-desembolso.page.html',
  styleUrls: ['./formas-de-desembolso.page.scss'],
  providers: [FormasDeDesembolsoService]
})
export class FormasDeDesembolsoPage implements OnInit {

  public formas: FormasDeDesembolso;
  public status;

  constructor(public _formasDeDesembolsoService: FormasDeDesembolsoService,
    public actionSheetController: ActionSheetController) { 

  }

  //ActionSheetController
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Formas de Desembolso',
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
    this.listaFormasDeDesembolso()
  }

  listaFormasDeDesembolso(){
    this._formasDeDesembolsoService.getFormasDeDesembolsos().subscribe(
      response=>{
        this.formas = response;
      }

    )
  }

}
