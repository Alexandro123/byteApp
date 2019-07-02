import { Component, OnInit } from '@angular/core';
import { MonedaMotivoReversionPagoService } from 'src/app/services/moneda-motivo-reversion-pago.service';
import { MonedaMotivoRerversionPago } from 'src/app/models/moneda-motivo-reversion-pago.model';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-moneda-motivo-reversion-de-pago',
  templateUrl: './moneda-motivo-reversion-de-pago.page.html',
  styleUrls: ['./moneda-motivo-reversion-de-pago.page.scss'],
  providers: [MonedaMotivoReversionPagoService]
})
export class MonedaMotivoReversionDePagoPage implements OnInit {

  public moneda: MonedaMotivoRerversionPago;
  public status;

  constructor(public _monedaMotivoReversionDePagoService: MonedaMotivoReversionPagoService,
    public actionSheetController: ActionSheetController) { 

  }

  //ActionSheetController
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Moneda Motivo Reversion De Pago',
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
    this.listaMoneda()
  }

  listaMoneda(){
    this._monedaMotivoReversionDePagoService.getMonedasMotivosRerversionPagos().subscribe(
      response=>{
        this.moneda = response;
      }

    )
  }



}
