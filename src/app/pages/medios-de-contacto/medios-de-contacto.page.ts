import { Component, OnInit } from '@angular/core';
import { MediosContactosService } from 'src/app/services/medios-contactos.service';
import { Medios } from 'src/app/models/medios.model';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-medios-de-contacto',
  templateUrl: './medios-de-contacto.page.html',
  styleUrls: ['./medios-de-contacto.page.scss'],
  providers: [MediosContactosService]
})
export class MediosDeContactoPage implements OnInit {

  public medios: Medios;
  public status;

  constructor(public _mediosDeContactoService: MediosContactosService,
    public actionSheetController: ActionSheetController) { 

  }

  //ActionSheetController
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Medios de Contacto',
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
    this.listaMediosDeContacto()
  }

  listaMediosDeContacto(){
    this._mediosDeContactoService.getMedios().subscribe(
      response=>{
        this.medios = response;
      }

    )
  }

}
