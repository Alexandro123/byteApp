import { Component, OnInit } from '@angular/core';
import { EstadoResolucion } from 'src/app/models/estado-resolucion.model';
import { EstadoResolucionService } from 'src/app/services/estado-resolucion.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-estado-resolucion',
  templateUrl: './estado-resolucion.page.html',
  styleUrls: ['./estado-resolucion.page.scss'],
  providers: [EstadoResolucionService]
})
export class EstadoResolucionPage implements OnInit {

  public estado: EstadoResolucion;
  public status;

  constructor(public _estadoResolucionService: EstadoResolucionService,
    public actionSheetController: ActionSheetController) { 

  }

  //ActionSheetController
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Estado Resolución',
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
    this.listaEstadoResolucion()
  }

  listaEstadoResolucion(){
    this._estadoResolucionService.getEstadoResolucion().subscribe(
      response=>{
        this.estado = response;
      }

    )
  }

}
