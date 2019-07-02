import { Component, OnInit } from '@angular/core';
import { EjecutivoCuenta } from 'src/app/models/ejecutivoCuenta.model';
import { EjecutivoCuentaService } from 'src/app/services/ejecutivo-cuenta.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-ejecutivo-cuenta',
  templateUrl: './ejecutivo-cuenta.page.html',
  styleUrls: ['./ejecutivo-cuenta.page.scss'],
  providers: [EjecutivoCuentaService]
})
export class EjecutivoCuentaPage implements OnInit {

  public ejecutivo: EjecutivoCuenta;
  public status;

  constructor(public _ejecutivoCuentaService: EjecutivoCuentaService,
    public actionSheetController: ActionSheetController) { 

  }

  //ActionSheetController
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Ejecutivo Cuenta',
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
    this.listaEjecutivoCuenta()
  }

  listaEjecutivoCuenta(){
    this._ejecutivoCuentaService.getEjecutivosCuentas().subscribe(
      response=>{
        this.ejecutivo = response;
      }

    )
  }



}
