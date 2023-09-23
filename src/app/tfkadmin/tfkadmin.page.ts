import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firestore.service';

@Component({
  selector: 'app-tfkadmin',
  templateUrl: './tfkadmin.page.html',
  styleUrls: ['./tfkadmin.page.scss'],
})
export class TfkadminPage implements OnInit {
  invitados = [{nombre:'',asistencia:false,frase:''}]
  invitacion = "";
  fraseInvitacion = "";
  ninios = false;
  constructor(public firebase:FirebaseService) { }

  ngOnInit() {
  }
  guardar(){
    let data:any = {
      frase: this.fraseInvitacion,
      nombre: this.invitacion,
      numeroAperturas: 0,
      Invitados: this.invitados,
      numeroInvitados: this.invitados.length,
      mensaje: '',
  
}
if(this.ninios){
  data.noNinios = true;
}
console.log(data)
    this.firebase.setdata(data)
    this.fraseInvitacion = "";
    this.invitacion = "";
    this.invitados = [{nombre:'',asistencia:false,frase:''}]
  }
  agregaInvitado(){
    this.invitados.push({nombre:'',asistencia:false,frase:''});
  }
}
