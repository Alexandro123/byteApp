import { Component, OnInit } from '@angular/core';
import { IngenieroValuadorService } from 'src/app/services/ingeniero-valuador.service';
import { IngenieroValuador } from 'src/app/models/ingeniero-valuador.model';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-ingenieros-valuadores',
  templateUrl: './ingenieros-valuadores.page.html',
  styleUrls: ['./ingenieros-valuadores.page.scss'],
  providers: [IngenieroValuadorService]
})
export class IngenierosValuadoresPage implements OnInit {
  public ingenieros: IngenieroValuador;
  public status;

  constructor(public _ingenieroValuadorService: IngenieroValuadorService,
    public actionSheetController: ActionSheetController) { 

  }

  //ActionSheetController
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Ingeniero Valuador',
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
    this.listaEstatusGarantiaReal()
  }

  listaEstatusGarantiaReal(){
    this._ingenieroValuadorService.getIngenirosValuadores().subscribe(
      response=>{
        this.ingenieros = response;
      }

    )
  }


}
