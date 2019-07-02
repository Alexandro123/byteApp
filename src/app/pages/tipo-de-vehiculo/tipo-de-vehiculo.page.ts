import { Component, OnInit } from '@angular/core';
import { TipoVehiculo } from 'src/app/models/tipoVehiculo.model';
import { TipoVehiculoService } from 'src/app/services/tipoVehiculo.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tipo-de-vehiculo',
  templateUrl: './tipo-de-vehiculo.page.html',
  styleUrls: ['./tipo-de-vehiculo.page.scss'],
})
export class TipoDeVehiculoPage implements OnInit {

  public vehiculo: TipoVehiculo;
  public status;

  constructor(public _tipoDeVehiculoService: TipoVehiculoService,
    public actionSheetController: ActionSheetController) { 

  }

  //ActionSheetController
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Tipo de Vehiculo',
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
    this.listaTipoVehiculo()
  }

  listaTipoVehiculo(){
    this._tipoDeVehiculoService.getTipoVehiculo().subscribe(
      response=>{
        this.vehiculo = response;
      }

    )
  }


}
