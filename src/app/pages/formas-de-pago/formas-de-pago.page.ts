import { Component, OnInit } from '@angular/core';
import { FormasDePagoService } from 'src/app/services/formas-de-pago.service';
import { FormasDePago } from 'src/app/models/formasDePago.model';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-formas-de-pago',
  templateUrl: './formas-de-pago.page.html',
  styleUrls: ['./formas-de-pago.page.scss'],
  providers: [FormasDePagoService]
})
export class FormasDePagoPage implements OnInit {

  public pagos: FormasDePago;
  public status;

  constructor(public _formasDePagoService: FormasDePagoService,
    public actionSheetController: ActionSheetController) { 

  }

  //ActionSheetController
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Formas de Pago',
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
    this.listaFormasDePago()
  }

  listaFormasDePago(){
    this._formasDePagoService.getFormasDePago().subscribe(
      response=>{
        this.pagos = response;
      }

    )
  }


}
