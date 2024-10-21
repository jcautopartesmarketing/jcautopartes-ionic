import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, 
  playOutline,
  logoInstagram,
  logoFacebook
 } from 'ionicons/icons';

 // import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Conectores', subTitle: 'Conectores Automotrices', url: '/folder/Conectores', icon: 'mailSharp' },
    { title: 'Piezas', url: '/folder/Piezas', icon: 'chevronForwardCircleOutline' },
    { title: 'Exploradoras', url: '/folder/Exploradoras', icon: 'chevronForwardCircleOutline' },
    { title: 'Arranques', url: '/folder/Arranques', icon: 'chevronForwardCircleOutline' },
    { title: 'Trash', url: '/folder/trash', icon: 'chevronForwardCircleOutline' },
    { title: 'Spam', url: '/folder/spam', icon: 'playOutline' },
  ];

  public redesSociales = [
    { title: 'Instagram', subTitle: 'Conectores Automotrices', url: '/folder/Instagram', icon: 'mailSharp' },
    { title: 'Facebook', url: '/folder/Facebook', icon: 'mailSharp' },
    { title: 'Consejos Automotrices', url: 'Consejos Automotrices', icon: '' },
    
  ];
  public labels = [ ];

  constructor() {
    addIcons({ 
      mailOutline, 
      mailSharp, 
      paperPlaneOutline, 
      paperPlaneSharp, 
      heartOutline, 
      heartSharp, 
      archiveOutline, 
      archiveSharp, 
      trashOutline, 
      trashSharp, 
      warningOutline, 
      warningSharp, 
      bookmarkOutline, 
      bookmarkSharp,
      playOutline,
      logoInstagram,
      logoFacebook

    });
  }
}
