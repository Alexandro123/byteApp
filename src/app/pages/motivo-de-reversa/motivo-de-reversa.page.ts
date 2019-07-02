import { Component, OnInit } from '@angular/core';
import { MotivosDeReversaService } from 'src/app/services/motivos-de-reversa.service';
import { MotivoDeReversa } from 'src/app/models/motivoDeReversa.model';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-motivo-de-reversa',
  templateUrl: './motivo-de-reversa.page.html',
  styleUrls: ['./motivo-de-reversa.page.scss'],
  providers: [MotivosDeReversaService]
})
export class MotivoDeReversaPage implements OnInit {

  public motivos: MotivoDeReversa;
  public status;

  constructor(public _motivoDeReversaService: MotivosDeReversaService,
    public actionSheetController: ActionSheetController) { 

  }

  //ActionSheetController
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Motivos de Reversa',
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
    this.listaMotivosDeReversa()
  }

  listaMotivosDeReversa(){
    this._motivoDeReversaService.getMotivosDeReversa().subscribe(
      response=>{
        this.motivos = response;
      }

    )
  }

}
