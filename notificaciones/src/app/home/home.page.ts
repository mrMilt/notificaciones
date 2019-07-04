import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  notificaciones:any=[];
  isNotificacion:boolean = true;

  constructor(private storage: Storage) {    
    this.storage.get('notificaciones').then((val) => {
   // this.notificaciones=JSON.parse(val);
        console.log(this.notificaciones);
  });
  }

ngOnInit() {
    
}

doRefresh(event) {
    console.log('Begin async operation');
    this.notificaciones = environment.notificaciones;
    if  (this.notificaciones.length > 0) {
      this.isNotificacion = false;
    }
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  verNotificacion(notificacion:any) {
    this.storage.set('notificacion', JSON.stringify(notificacion));
  }
}
