import { Component, OnInit, Input } from '@angular/core';
import { Almacenadora } from 'src/app/models/almacenadora.model';
import { AlmacenadorasService } from 'src/app/services/almacenadoras.service';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';




  var codigo = '';
  var descripcion = '';
  var empresa = '';

  var datosAlmacenadora: Almacenadora[];

@Component({
  selector: 'app-almacenadora',
  templateUrl: './almacenadora.page.html',
  styleUrls: ['./almacenadora.page.scss'],
  providers:[AlmacenadorasService]
})
export class AlmacenadoraPage implements OnInit {

  

  public almacenadora: Almacenadora;
  public status;

  constructor(public _almacenadoraService: AlmacenadorasService,
    public actionSheetController: ActionSheetController,
    private modal: ModalController) { 
      this.almacenadora = new Almacenadora("", "", "");
  }

  //ActionSheetController
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Almacenadora',
      buttons: [{
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        cssClass: 'rojo',
        handler: () => {
          this.eliminarModal();
        }
      }, {
        text: 'Editar',
        icon: 'create',
        cssClass: 'azul',
        handler: () => {
        this.editarModal();
        }
      }, {
        text: 'Ver',
        icon: 'eye',
        cssClass: 'celeste',
        handler: () => {
          this.verModal();
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
    this.listaAlmacenadora(),
    this.almacenadora.codigo = codigo;
    this.almacenadora.descripcion = descripcion;
    this.almacenadora.empresa = empresa;
  }

  listaAlmacenadora(){
    this._almacenadoraService.getAlmacenadoras().subscribe(
      response=>{
        if(response){
        datosAlmacenadora = response;
        console.log(datosAlmacenadora)

        this.almacenadora = response;
      }
    },
    error => {
      console.log(<any>error);
    }
    )
  }


  buscar(id, descripcion2, empresa2) {
    codigo = id;
    descripcion = descripcion2;
    empresa = empresa2;
    console.log(codigo + " - " + descripcion + " - " + empresa)
  }
  

  //Modal
  async abrirModal(){
    const modal = await this.modal.create({
      component: ModalPage,
      componentProps: {
        codigo: "",
        descripcion: ""
      }
    });
    await modal.present();
  }
//end
//Modal

async editarModal(){
  
  const modal = await this.modal.create({
    
    component: EditarPage,
    componentProps: {
      
      codigo: "1",
      //descripcion: ""
      
    }
    
  });
  await modal.present();
  console.log(this.almacenadora.codigo = codigo)
}
//end
//Modal
async verModal(){
  const modal = await this.modal.create({
    component: VerPage,
    componentProps: {
      codigo: this.almacenadora.codigo,
      //descripcion: this.almacenadora.descripcion,
    }
  });
  await modal.present();
}
//end
//Modal
async eliminarModal(){
  const modal = await this.modal.create({
    component: EliminarPage,
    componentProps: {
      codigo: this.almacenadora.codigo,
      //descripcion: this.almacenadora.descripcion,
    }
  });
  await modal.present();
}
//end



}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  
})
export class ModalPage {
  

public almacenadora: Almacenadora;
public status;

  constructor( private modalController: ModalController,
    private _almacenadorasService: AlmacenadorasService,
    public toastController: ToastController
    ) {
      this.almacenadora = new Almacenadora("", "", "");
     }

     async presentToast(message: string) {
      const toast = await this.toastController.create({
        message,
        duration: 2000,
        color: "primary"
      });
      toast.present();
    }

  cerrarModal(){
    this.modalController.dismiss();
  }



  listaAlmacenadora(){
    this._almacenadorasService.getAlmacenadoras().subscribe(
      response=>{
        if(response){
        datosAlmacenadora = response;
        console.log(datosAlmacenadora)

        this.almacenadora = response;
      }
    },
    error => {
      console.log(<any>error);
    }
    )
  }

  crearAlmacenadora(){
    this.almacenadora.empresa = "1";
    
    this._almacenadorasService.crearAlmacenadora(this.almacenadora).subscribe(
      
      response => {
        if (response) {
          this.status = 'ok';
          this.modalController.dismiss();
          this.presentToast('¡Agregado Correctamente!')
        }
        
      },
      error => {
        if (error) {
          console.log(<any>error);
          this.status = 'error';
          this.presentToast('¡Ha ocurrido un error!')
        }
      }

    )
     
  }

};


@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./modal.page.scss'],
  providers: [AlmacenadorasService]
  
})
export class EditarPage implements OnInit{
  
ngOnInit (){
  this.almacenadora2.codigo = codigo;
  this.almacenadora2.descripcion = descripcion;
  this.almacenadora2.empresa = empresa;
  
}


public almacenadora2: Almacenadora;
public status;

  constructor( private modalController: ModalController,
    private _almacenadorasService: AlmacenadorasService,
    public toastController: ToastController
    ) {
      this.almacenadora2 = new Almacenadora("", "", "");
     }

     async presentToast(message: string) {
      const toast = await this.toastController.create({
        message,
        duration: 2000,
        color: "primary"
      });
      toast.present();
    }

  cerrarModal(){
    this.modalController.dismiss();
  }



  listaAlmacenadora(){
   
    this._almacenadorasService.getAlmacenadoras().subscribe(
      response=>{
        if(response){
        
        datosAlmacenadora = response;
        console.log(datosAlmacenadora)

        this.almacenadora2 = response;
      }
    },
    error => {
      console.log(<any>error);
    }
    )
  }

  editarAlmacenadora() {
    this.almacenadora2.empresa = "1";
    this.almacenadora2.codigo = codigo;
    console.log(this.almacenadora2)
    this._almacenadorasService.editarAlmacenadora(this.almacenadora2).subscribe(
      response => {
        if (response) {
          this.status = 'ok';
          this.modalController.dismiss();
          this.presentToast('Editado Correctamente!')
        }
      },
      error => {
        if (error) {
          console.log(<any>error);
          this.status = 'error';
          this.presentToast('¡Ha ocurrido un error!')
        }
       
      }
    )
  }



}


@Component({
  selector: 'ver',
  templateUrl: './ver.page.html',
  styleUrls: ['./modal.page.scss']
})

export class VerPage implements OnInit {

  ngOnInit() {
    this.almacenadora.codigo = codigo;
    this.almacenadora.descripcion = descripcion;
    this.almacenadora.empresa = empresa;
    this.verAlmacenadora();
  }

  public almacenadora: Almacenadora;
  public status;

  constructor(
    private modalController: ModalController,
    private _almacenadoraService: AlmacenadorasService,
    public toastController: ToastController) {
    this.almacenadora = new Almacenadora("", "", "");
  }

  verAlmacenadora(){
    this.almacenadora.empresa = "1";
    this.almacenadora.codigo = "1";
    console.log('entre aqui')
    this._almacenadoraService.buscarAlmacenadora(this.almacenadora.codigo).subscribe(
      
      response=>{
        console.log('entre aqui2')
        if(response){
          console.log('entre aqui3')
        datosAlmacenadora = response;
        console.log(datosAlmacenadora)

        this.almacenadora = response;
      }
    },
    error => {
      console.log(<any>error);
    }
    )
  }


  cerrarModal(){
    this.modalController.dismiss();
  }  

}




@Component({
  selector: 'eliminar',
  templateUrl: './eliminar.page.html',
  styleUrls: ['./modal.page.scss']
})

export class EliminarPage implements OnInit {

  ngOnInit() {
    this.almacenadora.codigo = codigo;
    this.almacenadora.descripcion = descripcion;
    this.almacenadora.empresa = empresa;
    //this.verAlmacenadora();
  }

  public almacenadora: Almacenadora;
  public status;

  constructor(
    private modalController: ModalController,
    private _almacenadoraService: AlmacenadorasService,
    public toastController: ToastController) {
    this.almacenadora = new Almacenadora("", "", "");
  }

  eliminarAlmacenadora() {
    this.almacenadora.codigo = "5";
    this.almacenadora.empresa = "1";
    this._almacenadoraService.eliminarAlmacenadora(this.almacenadora).subscribe(
      response => {
        if (!response) {
          this.status = "error"
        } else {
          this.status = "Success"
          
        }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if (errorMessage != null) {
          this.status = "error";
        }
      
      }
    )
  }


  cerrarModal(){
    this.modalController.dismiss();
  }  

}



