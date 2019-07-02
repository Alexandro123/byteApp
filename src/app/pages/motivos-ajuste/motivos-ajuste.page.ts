import { Component, OnInit } from '@angular/core';
import { MotivoAjusteService } from 'src/app/services/motivo-ajuste.service';
import { ActionSheetController } from '@ionic/angular';
import { MotivoAjuste } from 'src/app/models/motivo-ajuste.model';

@Component({
  selector: 'app-motivos-ajuste',
  templateUrl: './motivos-ajuste.page.html',
  styleUrls: ['./motivos-ajuste.page.scss'],
  providers: [MotivoAjusteService]
})
export class MotivosAjustePage implements OnInit {

  public motivos: MotivoAjuste;
  public status;

  constructor(public _motivoAjusteService: MotivoAjusteService,
    public actionSheetController: ActionSheetController) { 

  }

  //ActionSheetController
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Motivos de Ajuste',
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
    this.listaMotivoDeAjuste()
  }

  listaMotivoDeAjuste(){
    this._motivoAjusteService.getMotivosAjustes().subscribe(
      response=>{
        this.motivos = response;
      }

    )
  }


}
