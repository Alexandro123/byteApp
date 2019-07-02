import { Component, OnInit } from '@angular/core';
import { StatusGarantiaReal } from 'src/app/models/statusGarantiaReal.model';
import { StatusGarantiaRealService } from 'src/app/services/status-garantia-real.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-estatus-garantia-real',
  templateUrl: './estatus-garantia-real.page.html',
  styleUrls: ['./estatus-garantia-real.page.scss'],
  providers: [StatusGarantiaRealService]
})
export class EstatusGarantiaRealPage implements OnInit {

  public estatus: StatusGarantiaReal;
  public status;

  constructor(public _statusGarnatiaRealService: StatusGarantiaRealService,
    public actionSheetController: ActionSheetController) { 

  }

  //ActionSheetController
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Estatus Garantia Real',
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
    this._statusGarnatiaRealService.getStatusGarantiaReal().subscribe(
      response=>{
        this.estatus = response;
      }

    )
  }

}
