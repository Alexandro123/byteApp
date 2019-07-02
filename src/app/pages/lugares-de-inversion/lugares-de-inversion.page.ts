import { Component, OnInit } from '@angular/core';
import { LugaresService } from 'src/app/services/lugares.service';
import { ActionSheetController } from '@ionic/angular';
import { Lugares } from 'src/app/models/lugares.model';

@Component({
  selector: 'app-lugares-de-inversion',
  templateUrl: './lugares-de-inversion.page.html',
  styleUrls: ['./lugares-de-inversion.page.scss'],
  providers: [LugaresService]
})
export class LugaresDeInversionPage implements OnInit {

  public lugares: Lugares;
  public status;

  constructor(public _lugaresService: LugaresService,
    public actionSheetController: ActionSheetController) { 

  }

  //ActionSheetController
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Lugares de Inversion',
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
    this.listaLugares()
  }

  listaLugares(){
    this._lugaresService.getLugares().subscribe(
      response=>{
        this.lugares = response;
      }

    )
  }

}
