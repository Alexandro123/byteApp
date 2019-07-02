import { Component, OnInit } from '@angular/core';
import { EstatusAvaluosService } from 'src/app/services/estatus-avaluos.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-estatus-avaluos',
  templateUrl: './estatus-avaluos.page.html',
  styleUrls: ['./estatus-avaluos.page.scss'],
  providers: [EstatusAvaluosService]
})
export class EstatusAvaluosPage implements OnInit {

  public avaluos: EstatusAvaluosService;
  public status;

  constructor(public _estatusAvaluosService: EstatusAvaluosService,
    public actionSheetController: ActionSheetController) { 

  }

  //ActionSheetController
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Estatus Avalúos',
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
    this.listaEstatusAvaluos()
  }

  listaEstatusAvaluos(){
    this._estatusAvaluosService.getEstatusAvaluos().subscribe(
      response=>{
        this.avaluos = response;
      }

    )
  }


}
