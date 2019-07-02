import { Component, OnInit } from '@angular/core';
import { TipoActivoCrediticio } from 'src/app/models/tipoActivoCrediticio.model';
import { TipoActivoCrediticioService } from 'src/app/services/tipoActivoCrediticio.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tipo-activo-crediticio',
  templateUrl: './tipo-activo-crediticio.page.html',
  styleUrls: ['./tipo-activo-crediticio.page.scss'],
  providers: [TipoActivoCrediticioService]
})
export class TipoActivoCrediticioPage implements OnInit {

  public crediticio: TipoActivoCrediticio;
  public status;

  constructor(public _activoCrediticioService: TipoActivoCrediticioService,
    public actionSheetController: ActionSheetController) { 

  }

  //ActionSheetController
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Tipo de Activo Crediticio',
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
    this.listaTipoActivoCrediticio()
  }

  listaTipoActivoCrediticio(){
    this._activoCrediticioService.getTipoActivoCrediticio().subscribe(
      response=>{
        this.crediticio = response;
      }

    )
  }

}
