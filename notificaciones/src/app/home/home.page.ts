import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  notificaciones:any=[];
  isNotificacion:boolean = true;

  constructor(private storage: Storage, private router: Router) {    
    this.storage.get('notificaciones').then((val) => {
      environment.notificaciones = JSON.parse(val);
    this.notificaciones=environment.notificaciones;
        console.log(this.notificaciones);
        this.verificarNotificaciones();
  });
  }

ngOnInit() {
    
}

doRefresh(event) {
  this.storage.get('notificaciones').then((val) => {
    environment.notificaciones = JSON.parse(val);
  this.notificaciones=environment.notificaciones;
      console.log(this.notificaciones);
      this.verificarNotificaciones();
});
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  verNotificacion(notificacion:any) {
    this.router.navigate(['/notificacion']);
   this.eliminarNotificacion(notificacion);
  }

  eliminarNotificacion(notificacion:any) {
    environment.notificaciones.splice(this.notificaciones.indexOf(notificacion), 1);
    this.notificaciones = environment.notificaciones;
    this.storage.set('notificaciones', JSON.stringify(environment.notificaciones));
    this.storage.set('notificacion', JSON.stringify(notificacion));    
    this.verificarNotificaciones();
  }
  
  verificarNotificaciones() {
    if (environment.notificaciones != null) {
      if  (environment.notificaciones.length == 0) {
        this.isNotificacion = true;
      }  else {
        this.isNotificacion = false;
      }
    }
  }
}
