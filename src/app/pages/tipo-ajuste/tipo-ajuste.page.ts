import { Component, OnInit } from '@angular/core';
import { TipoAjusteService } from 'src/app/services/tipo-ajuste.service';
import { TipoAjuste } from 'src/app/models/tipo-ajuste.model';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tipo-ajuste',
  templateUrl: './tipo-ajuste.page.html',
  styleUrls: ['./tipo-ajuste.page.scss'],
  providers: [TipoAjusteService]
})
export class TipoAjustePage implements OnInit {

  public tipoAjuste: TipoAjuste;
  public status;

  constructor(public _tipoAjusteService: TipoAjusteService,
    public actionSheetController: ActionSheetController) { 

  }

  //ActionSheetController
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Tipo Ajuste',
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
    this.listaTipoAjuste()
  }

  listaTipoAjuste(){
    this._tipoAjusteService.getTipoAjustes().subscribe(
      response=>{
        this.tipoAjuste = response;
      }

    )
  }


}
