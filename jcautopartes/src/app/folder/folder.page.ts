
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/angular/standalone';

export interface ProductoInterface { // Use PascalCase for interface names
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  link:string;
}

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, CommonModule, 
    IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton
  ],
})
export class FolderPage implements OnInit {
  public folder!: string;
  public productos!: ProductoInterface[]; // Se usa en plural ya que manejara varios productos por coleccion.
  public subTitle!: string;

  private activatedRoute = inject(ActivatedRoute); // Inecta rutas Activas

  private productosData: { [key: string]: ProductoInterface[] } = { // Use an object to store product data
   
    Conectores: [
      { id: '1', nombre: 'Conector 1', descripcion: 'Este es un conector', imagen: 'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168827/conector-01_bbui34.png', link:'' },
      { id: '2', nombre: 'Conector 2', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168827/conector-02_d7d4pz.png', link:'' },
      { id: '3', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168827/conector-03_xbdyfs.png', link:'' },
      { id: '4', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168828/conector-04_oq15nq.png', link:'' },
      { id: '5', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168828/conector-05_uvw8ht.png', link:'' },
      { id: '6', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168829/conector-06_lxwaq5.png', link:'' },
      { id: '7', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168829/conector-07_wc4tfe.png', link:'' },
      { id: '8', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168830/conector-09_dgwdn0.png', link:'' },
      { id: '9', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168830/conector-08_vxlt4u.png' , link:''},
      { id: '10', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168830/conector-10_q5nrgf.png', link:'' },
      { id: '11', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168831/conector-11_rr1r1k.png', link:'' },
      { id: '12', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168831/conector-12_fczlpd.png', link:'' },
      { id: '13', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168832/conector-14_unbgk7.png', link:'' },
      { id: '14', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168832/conector-13_quqgi3.png', link:'' },
      { id: '15', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168832/conector-15_dsn68u.png' , link:''},
      { id: '16', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168833/conector-16_d7mjlv.png', link:'' },
      { id: '17', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168833/conector-17_llhc93.png', link:'' },
      { id: '18', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168833/conector-18_v8kbuu.png', link:'' },
      { id: '19', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168834/conector-19_fxbfp8.png', link:'' },
      { id: '20', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168834/conector-20_rkbxst.png', link:'' },
      { id: '21', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168834/conector-21_cogna8.png' , link:''},
      { id: '22', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168835/conector-22_yrdvhs.png', link:'' },
      { id: '23', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168835/conector-23_npsqcb.png', link:'' },
      { id: '24', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168836/conector-24_witlgm.png', link:'' },
      { id: '25', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168836/conector-25_u4erqf.png', link:'' },
      { id: '26', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168837/conector-26_ra7icp.png', link:'' },
      { id: '27', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168837/conector-27_nsheqa.png', link:'' },
      { id: '28', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168837/conector-28_okwpk0.png', link:'' },
      { id: '29', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168838/conector-29_pozlug.png', link:'' },
      { id: '30', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168838/conector-30_kwlr1k.png', link:'' },
      { id: '31', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168838/conector-31_u4ltg9.png', link:'' },
      { id: '32', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168839/conector-32_ejek8l.png', link:'' },
      { id: '33', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168839/conector-33_mfclrl.png', link:'' },
      { id: '34', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168840/conector-34_vsvasz.png', link:'' },
      { id: '35', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168840/conector-35_u6vxx8.png', link:'' },
      { id: '36', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168841/conector-36_ctuamx.png', link:'' },
      { id: '37', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168841/conector-37_doratc.png', link:'' },
      { id: '38', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168841/conector-38_rwzdol.png', link:'' },
      { id: '39', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168842/conector-39_squqoz.png', link:'' },
      { id: '40', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168842/conector-40_e45ghm.png', link:'' },
      { id: '41', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168843/conector-41_mxlnxr.png', link:'' },
      { id: '42', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168843/conector-42_i4o4wp.png', link:'' },
      { id: '43', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168843/conector-43_agadbq.png', link:'' },
      { id: '44', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168844/conector-44_nk9tpx.png', link:'' },
      { id: '45', nombre: 'Conector 3', descripcion: 'Este es un conector', imagen:'https://res.cloudinary.com/dmx8cl60o/image/upload/v1729168827/conector-02_d7d4pz.png', link:'' },
      
    
    ],

        
    Piezas: [
      { id: '1', nombre: 'Pieza 1', descripcion: 'Esta es una pieza', imagen:'', link:'' },
      { id: '2', nombre: 'Pieza 2', descripcion: 'Esta es una pieza', imagen:'', link:'' },
      { id: '3', nombre: 'Pieza 3', descripcion: 'Esta es una pieza', imagen:'', link:'' },
    ],
   
    Exploradoras: [
      { id: '1', nombre: 'Exploradoras 1', descripcion: 'Esta es una descripcion', imagen:'', link:'' },
      { id: '2', nombre: 'Exploradoras 2', descripcion: 'Esta es una descripcion', imagen:'', link:'' },
      { id: '3', nombre: 'Exploradoras 3', descripcion: 'Esta es una descripcion', imagen:'', link:'' },
    ],

    Arranques: [
      { id: '1', nombre: 'Arranques 1', descripcion: 'Esta es una descripcion', imagen:'', link:'' },
      { id: '2', nombre: 'Arranques 2', descripcion: 'Esta es una descripcion', imagen:'', link:'' },
      { id: '3', nombre: 'Arranques 3', descripcion: 'Esta es una descripcion', imagen:'', link:'' },
    ],
  };

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.productos = this.productosData[this.folder] || []; // Assign products using the object 
    this.subTitle = this.subTitle;
  }
}
