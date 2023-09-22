import { Component, HostListener, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firestore.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-lesliemode',
  templateUrl: './lesliemode.page.html',
  styleUrls: ['./lesliemode.page.scss'],
})
export class LesliemodePage implements OnInit {
data:any;
confirmadosArray:any;
confirmados = 0;
sinConfirmar = 0;
flag = 'noData'
  constructor(public firebase:FirebaseService,private loadingCtrl: LoadingController) {}

  ngOnInit() {
  }
  async handleInput(evento:any){
      if(evento){
        if(evento.detail.value.toLowerCase() == 'confirmados' || evento.detail.value.toLowerCase() == 'confirmacion' || evento.detail.value.toLowerCase() == 'confirmados'){
           this.data = await this.firebase.findAll();
            console.log(this.data)
            this.confirmadosArray = await this.filtrarConfirmaciones(this.data);
            this.flag = 'confirmados';
        }
        else if(evento.detail.value.toLowerCase() == 'todas'){
            this.data = await this.firebase.findAll();
            this.flag = 'todas'
        }else{
          this.data = await this.firebase.findOnebyname(evento.detail.value);
          this.flag = 'una'
          console.log(this.data)
        }
        if(!this.data){
          this.flag = 'noData'
        }
      }  
  }
  async copiar(id:any){
    try {
      await navigator.clipboard.writeText('http://invitaciongerardoyleslie.com/invitados/'+id)
      const loading = await this.loadingCtrl.create({
        message: 'Copiado con exito',
        duration: 800,
      });
  
      loading.present();
    }catch(error){
      const loading = await this.loadingCtrl.create({
        message: 'Error al copiar intentalo de nuevo',
        duration: 800,
      });
    }
    }
    
 async filtrarConfirmaciones(data:any){
    let confirmados = []
    this.confirmados = 0;
    this.sinConfirmar = 0;
    for(let item of data){
      if(item.data.hasOwnProperty('Invitados') && item.data.Invitados.length > 0){
        for(let _item of item.data.Invitados){
          confirmados.push(_item)
          if(_item.asistencia){
            this.confirmados++;
          }else{
          this.sinConfirmar++;
          }
        }
      }
    }
    return confirmados
  } 
}
