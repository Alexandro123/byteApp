import { Component, OnInit } from '@angular/core';
import { AseguradorasService } from 'src/app/services/aseguradoras.service';
import { ActionSheetController } from '@ionic/angular';
import { Aseguradora } from 'src/app/models/aseguradora.model';

@Component({
  selector: 'app-aseguradora',
  templateUrl: './aseguradora.page.html',
  styleUrls: ['./aseguradora.page.scss'],
  providers:[AseguradorasService]
})
export class AseguradoraPage implements OnInit {


  public aseguradora: Aseguradora;
  public status;

  constructor(public _aseguradoraService: AseguradorasService,
    public actionSheetController: ActionSheetController) { }

  //ActionSheetController
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Aseguradora',
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
    this.listaAseguradora()
  }

  listaAseguradora(){
    this._aseguradoraService.getAseguradoras().subscribe(
      response=>{
        this.aseguradora = response;
      }

    )
  }


}
