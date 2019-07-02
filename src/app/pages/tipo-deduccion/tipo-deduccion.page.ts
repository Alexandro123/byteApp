import { Component, OnInit } from '@angular/core';
import { TipoDeduccionService } from 'src/app/services/tipo-deduccion.service';
import { ActionSheetController } from '@ionic/angular';
import { TipoDeduccion } from 'src/app/models/tipo-deduccion.model';

@Component({
  selector: 'app-tipo-deduccion',
  templateUrl: './tipo-deduccion.page.html',
  styleUrls: ['./tipo-deduccion.page.scss'],
  providers: [TipoDeduccionService]
})
export class TipoDeduccionPage implements OnInit {

  public deduccion: TipoDeduccion;
  public status;

  constructor(public _tipoDeduccionService: TipoDeduccionService,
    public actionSheetController: ActionSheetController) { 

  }

  //ActionSheetController
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Tipo Deducción',
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
    this.listaTipoDeduccion()
  }

  listaTipoDeduccion(){
    this._tipoDeduccionService.getTiposDeduccion().subscribe(
      response=>{
        this.deduccion = response;
      }

    )
  }


}
