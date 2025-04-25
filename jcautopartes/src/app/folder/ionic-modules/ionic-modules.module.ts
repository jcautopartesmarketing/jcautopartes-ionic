import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonButton, IonButtons, IonCard, IonCardContent, 
  IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, 
  IonContent, IonGrid, IonHeader, IonMenuButton, IonRow, 
  IonTitle, IonToolbar 
} from '@ionic/angular/standalone';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, 
    IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, 
    IonCardTitle, IonCardSubtitle, IonCardContent, IonButton
  ],
  exports: [
    CommonModule, 
    IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, 
    IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, 
    IonCardTitle, IonCardSubtitle, IonCardContent, IonButton
  ]
})
export class IonicModulesModule { }
