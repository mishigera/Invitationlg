import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swiper from 'swiper';
import { AlertController, AlertOptions, LoadingController, createAnimation } from '@ionic/angular';
import { timer } from 'rxjs';
import { FirebaseService } from '../services/firestore.service';
import { register } from 'swiper/element/bundle';
register();


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper ? : Swiper;

  id: any;
  isAlertOpen = false;
  public alertButtons = ['OK'];
  _second = 1000;
  flagPadres = false;
  flagCuenta = false;
  _minute = this._second * 60;
  _hour = this._minute * 60;
  _day = this._hour * 24;
  end: any;
  now: any;
  day: any;
  hours: any;
  minutes: any;
  seconds: any;
  source = timer(0, 1000);
  clock: any;
  data: any;
  flagPlay = false;
  flagFirst = false;
  audio = new Audio;
  currentPhoto = " ../../assets/fotocolor.JPG"

  constructor(public route: ActivatedRoute, private alertController: AlertController, public firebase: FirebaseService, private loadingCtrl: LoadingController) {}
  ngAfterViewInit(): void {
    var elem = document.getElementById('divMaster');

    this.muestraDiv(elem)

  }
  muestraDiv(elem: any) {
    console.log(elem)
  }
  async iniciar() {

    this.clockStart();
    // this.data = localStorage.getItem('data');
    // this.data = JSON.parse(this.data)
    if (!this.data) {
      this.data = await this.firebase.findOne(this.id);
      localStorage.setItem('data', JSON.stringify(this.data))
    }
    this.presentAlert(this.data)
  }
  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.iniciar()



  }
  clockStart() {
    this.clock = this.source.subscribe(t => {
      this.now = new Date();
      this.end = new Date('12/02/' + (this.now.getFullYear()) + ' 00:00');
      this.showDate();
    });
  }
  async confirmar(invitados: any) {
    console.log(invitados)
    let asistencia = "";
    this.data.data.numeroAperturas = Number(this.data.data.numeroAperturas) + 1;
    for (let item of invitados) {
      if (item.asistencia) {
        asistencia = asistencia + " " + item.nombre;
      }
    }
    let msj = asistencia ? 'Gracias por confirmar la asistencia de' : 'Gracias por todo.'
    const loading = await this.loadingCtrl.create({
      message: msj + asistencia,
      duration: 3000,
    });
    this.firebase.update(this.data.data, this.id)
    loading.present();
  }
  setData(evento: any, value: any) {
    value = evento.detail.checked;
    console.log(evento)
  }
  onContentScroll(evento: any) {
    let scrollOffset = evento.srcElement.scrollTop;
    if (!this.flagPlay ) {
      if(!this.flagFirst){
        this.flagFirst = true;
        this.playAudio();
      }

    }
    // console.log("scroll: ", scrollOffset);
    if (scrollOffset > 100) {
      
      this.flagPadres = true;
    }
    if (scrollOffset > 1000) {
      this.flagCuenta = true;
    }
    if (scrollOffset > 1200) {
      this.flagPadres = false;

    }
  }
  showDate() {
    let distance = this.end - this.now;
    this.day = Math.floor(distance / this._day);
    this.hours = Math.floor((distance % this._day) / this._hour);
    this.minutes = Math.floor((distance % this._hour) / this._minute);
    this.seconds = Math.floor((distance % this._minute) / this._second);
  }
  async presentAlert(datos: any) {
    let a: AlertOptions;
    console.log(datos)
    const alert = await this.alertController.create({
      header: 'Bienvenido a la invitacion de Leslie y Gerardo',
      subHeader: datos.data.hasOwnProperty('frase') ? datos.data.frase : 'Leslie estas cordealmente invitado',
      message: 'Es importante que confirme su asistencia!',
      buttons: ['Ver'],

    });

    await alert.present();
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
  resume(){
    if(this.flagPlay){
      this.flagPlay = false;
      this.audio.pause();
    }else{
      this.flagPlay = true;
      this.audio.play();
    }
  }
  playAudio() {
    this.audio.src = '../assets/cancion.mp3';
    this.audio.volume = 0.50;
    this.audio.load();

    this.audio.play();
    this.flagPlay = true;
  }
  mapa(evento: string) {
    if (evento == 'parroquia') {
      window.open('https://goo.gl/maps/6FKGveH4ir1dwJZy5')
    } else if (evento == 'salon') {
      window.open('https://goo.gl/maps/MTmNWmpHhScVFeCS7')
    } else if (evento == 'amazon') {
      window.open('https://www.amazon.com.mx/wedding/share/leslieygerardo')
    } else if (evento == 'liverpool') {
      window.open('https://mesaderegalos.liverpool.com.mx/milistaderegalos/51286566')
    } else if (evento == 'drive') {
      window.open('https://drive.google.com/drive/folders/1qctSNq8yQwkzMBUkCTufd1xoGt04h8oy')
    }
  }
}
