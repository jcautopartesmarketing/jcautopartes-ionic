import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonAvatar, IonFooter, IonToolbar, IonTitle, IonChip, IonItemDivider } from '@ionic/angular/standalone';
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
  imports: [
    RouterLink, RouterLinkActive, CommonModule, 
    IonApp, IonSplitPane, IonMenu, IonContent, 
    IonList, IonListHeader, IonNote, IonMenuToggle, 
    IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet,
    IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, 
    IonAvatar, IonFooter, IonToolbar, IonTitle, IonChip, IonItemDivider
  ],
})
export class AppComponent {
  public appPages = [
    { 
      title: 'Conectores', 
      subTitle: 'Conectores Automotrices', 
      url: '/folder/Conectores', 
      icon: 'https://res.cloudinary.com/dlkqs67aj/image/upload/t_Profile/v1729701597/icono-conectores_s2hfhs.png' 
    },
    
    { 
      title: 'Exploradoras', 
      url: '/folder/Exploradoras', 
      icon: 'https://res.cloudinary.com/dlkqs67aj/image/upload/t_Profile/v1729697355/icono-exploradoras_JCAUTOPARTES.png' 
    },
    { 
      title: 'Arranques', 
      url: '/folder/Piezas', 
      icon: 'https://res.cloudinary.com/dlkqs67aj/image/upload/v1729720894/arranque-de-carro_fwlu7e.webp' 
    },
    { 
      title: 'Alternadores', 
      url: '/folder/Alternadores', 
      icon: 'https://res.cloudinary.com/dlkqs67aj/image/upload/v1729702055/pngegg_3_hilj9i.png' 
    },
    { 
      title: 'Baterias', 
      url: '/folder/Baterias', 
      icon: 'https://res.cloudinary.com/dlkqs67aj/image/upload/v1729721084/BATERIAS_fvn75d.jpg' 
    },
    { 
      title: 'Sensores', 
      url: '/folder/Sensores', 
      icon: 'https://res.cloudinary.com/dlkqs67aj/image/upload/v1729721084/BATERIAS_fvn75d.jpg' 
    },
    { 
      title: 'Bujias', 
      url: '/folder/Bujias', 
      icon: 'https://res.cloudinary.com/dlkqs67aj/image/upload/t_Profile/v1729702050/pngegg_11_dypbul.png' 
    },
    { 
      title: 'Frenos', 
      url: '/folder/Frenos', 
      icon: 'https://res.cloudinary.com/dlkqs67aj/image/upload/v1729702044/pngegg_16_fyaqi9.png' 
    },
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
