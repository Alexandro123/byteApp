import { Component, OnInit } from '@angular/core';
import { Notario } from 'src/app/models/notario.model';
import { NotarioService } from 'src/app/services/notario.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-notarios',
  templateUrl: './notarios.page.html',
  styleUrls: ['./notarios.page.scss'],
  providers: [NotarioService]
})
export class NotariosPage implements OnInit {


  public notarios: Notario;
  public status;

  constructor(public _notarioService: NotarioService,
    public actionSheetController: ActionSheetController) { 

  }

  //ActionSheetController
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Notarios',
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
    this.listaNotarios()
  }

  listaNotarios(){
    this._notarioService.getNotarios().subscribe(
      response=>{
        this.notarios = response;
      }

    )
  }


}
