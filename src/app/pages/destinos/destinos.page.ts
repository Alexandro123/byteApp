import { Component, OnInit } from '@angular/core';
import { DestinoService } from 'src/app/services/destino.service';
import { Destino } from 'src/app/models/destino.model';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.page.html',
  styleUrls: ['./destinos.page.scss'],
  providers: [DestinoService]
})
export class DestinosPage implements OnInit {

  public destinos: Destino;
  public status;

  constructor(public _destinoService: DestinoService,
    public actionSheetController: ActionSheetController) { 

  }

  //ActionSheetController
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Destinos',
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
    this.listaDestinos()
  }

  listaDestinos(){
    this._destinoService.getDestinos().subscribe(
      response=>{
        this.destinos = response;
      }

    )
  }


}
