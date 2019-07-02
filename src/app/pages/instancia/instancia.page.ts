import { Component, OnInit } from '@angular/core';
import { InstanciaService } from 'src/app/services/instancia.service';
import { Instancia } from 'src/app/models/instancia.model';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-instancia',
  templateUrl: './instancia.page.html',
  styleUrls: ['./instancia.page.scss'],
  providers: [InstanciaService]
})
export class InstanciaPage implements OnInit {

  public instancia: Instancia;
  public status;

  constructor(public _instanciaService: InstanciaService,
    public actionSheetController: ActionSheetController) { 

  }

  //ActionSheetController
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Instancia',
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
    this.listaInstancia()
  }

  listaInstancia(){
    this._instanciaService.getInstancias().subscribe(
      response=>{
        this.instancia = response;
      }

    )
  }



}
