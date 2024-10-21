import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonRow, IonTitle, IonToolbar } from '@ionic/angular/standalone';

export interface Consejo {
  nombre: string;
  video: string;
}

@Component({
  selector: 'app-consejos-automotrices',
  templateUrl: './consejos-automotrices.page.html',
  styleUrls: ['./consejos-automotrices.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonRow, IonCol, IonButtons, IonMenuButton,]
})
export class ConsejosAutomotricesPage implements OnInit {

  consejos: Consejo[] = [
    {
      nombre: '5 Consejos para cuidar la bateria de su vehículo', 
      video: 'https://res.cloudinary.com/dlkqs67aj/video/upload/v1729526772/5_consejos_para_cuidar_la_bateria_de_tu_carro_azhbao.mp4'
    },

  ];

 
  constructor() { }

  ngOnInit() {
  }

}
