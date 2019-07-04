import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.scss'],
})
export class MensajeComponent implements OnInit {

notificacion:any;

  constructor(private storage: Storage) {
    this.storage.get('notificacion').then((val) => {
    this.notificacion = JSON.parse(val);
  });
   }

  ngOnInit() {}


}
