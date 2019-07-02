import { Component, OnInit } from '@angular/core';
import { OrigenDeFondosService } from 'src/app/services/origenDeFondos.service';
import { OrigenDeFondos } from 'src/app/models/origenDeFondos.model';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-origen-de-fondos',
  templateUrl: './origen-de-fondos.page.html',
  styleUrls: ['./origen-de-fondos.page.scss'],
  providers: [OrigenDeFondosService]
})
export class OrigenDeFondosPage implements OnInit {

  public fondos: OrigenDeFondos;
  public status;

  constructor(public _origenDeFondosService: OrigenDeFondosService,
    public actionSheetController: ActionSheetController) { 

  }

  //ActionSheetController
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Origen de Fondos',
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
    this.listaOrigenDeFondos()
  }

  listaOrigenDeFondos(){
    this._origenDeFondosService.getOrigenDeFondos().subscribe(
      response=>{
        this.fondos = response;
      }

    )
  }


}
