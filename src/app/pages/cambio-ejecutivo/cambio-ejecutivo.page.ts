import { Component, OnInit } from '@angular/core';
import { MotivoCambioEjecutivoService } from 'src/app/services/motivo-cambio-ejecutivo.service';
import { MotivoCambioEjecutivo } from 'src/app/models/motivo-cambio-ejecutivo.model';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-cambio-ejecutivo',
  templateUrl: './cambio-ejecutivo.page.html',
  styleUrls: ['./cambio-ejecutivo.page.scss'],
  providers: [MotivoCambioEjecutivoService]
})
export class CambioEjecutivoPage implements OnInit {

  public cambio: MotivoCambioEjecutivo;
  public status;

  constructor(public _motivoCambioService: MotivoCambioEjecutivoService,
    public actionSheetController: ActionSheetController) { 

  }

  //ActionSheetController
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Cambio Ejecutivo',
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
    this.listaCambio()
  }

  listaCambio(){
    this._motivoCambioService.getMotivoCambioEjecutivo().subscribe(
      response=>{
        this.cambio = response;
      }

    )
  }

}
