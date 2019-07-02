import { Component, OnInit } from '@angular/core';
import { PoderService } from 'src/app/services/poder.service';
import { Poder } from 'src/app/models/poder.model';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-poder',
  templateUrl: './poder.page.html',
  styleUrls: ['./poder.page.scss'],
  providers: [PoderService]
})
export class PoderPage implements OnInit {

  public poder: Poder;
  public status;

  constructor(public _poderService: PoderService,
    public actionSheetController: ActionSheetController) { 

  }

  //ActionSheetController
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Poder',
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
    this.listaPoder()
  }

  listaPoder(){
    this._poderService.getPoder().subscribe(
      response=>{
        this.poder = response;
      }

    )
  }

}
