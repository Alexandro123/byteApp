import { Component, OnInit } from '@angular/core';
import { DiaInhabilService } from 'src/app/services/dia-inhabil.service';
import { ActionSheetController } from '@ionic/angular';
import { DiaInhabil } from 'src/app/models/dia-inhabil.model';

@Component({
  selector: 'app-dias-inhabiles',
  templateUrl: './dias-inhabiles.page.html',
  styleUrls: ['./dias-inhabiles.page.scss'],
  providers: [DiaInhabilService]
})
export class DiasInhabilesPage implements OnInit {

  public dias: DiaInhabil;
  public status;

  constructor(public _diaInhabilService: DiaInhabilService,
    public actionSheetController: ActionSheetController) { 

  }

  //ActionSheetController
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Dia Inhábil',
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
    this.listaDiaInhabil()
  }

  listaDiaInhabil(){
    this._diaInhabilService.getDiasInhabiles().subscribe(
      response=>{
        this.dias = response;
      }

    )
  }
}
