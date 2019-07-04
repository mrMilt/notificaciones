import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(private oneSignal: OneSignal, private storage: Storage) { }

  configuracion_inicial() {
    this.oneSignal.startInit('58140f30-9f11-458e-954a-394390d796ec', '72220784279');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe((notification) => {
    // do something when notification is received
    console.log(notification);
    environment.notificaciones.push(notification.payload);
    this.storage.set('notificaciones', JSON.stringify(environment.notificaciones));
    });

    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
    });

    this.oneSignal.endInit();
  }
}
