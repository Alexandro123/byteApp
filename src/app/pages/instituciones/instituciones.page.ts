import { Component, OnInit } from '@angular/core';
import { InstitucionesService } from 'src/app/services/instituciones.service';
import { Institucion } from 'src/app/models/institucion.model';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-instituciones',
  templateUrl: './instituciones.page.html',
  styleUrls: ['./instituciones.page.scss'],
  providers: [InstitucionesService]
})
export class InstitucionesPage implements OnInit {

  public instituciones: Institucion;
  public status;

  constructor(public _institucionesService: InstitucionesService,
    public actionSheetController: ActionSheetController) { 

  }

  //ActionSheetController
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Instituciones',
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
    this.listaInstituciones()
  }

  listaInstituciones(){
    this._institucionesService.getInstituciones().subscribe(
      response=>{
        this.instituciones = response;
      }

    )
  }

}
