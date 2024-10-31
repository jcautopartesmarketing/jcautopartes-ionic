import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonButton } from '@ionic/angular/standalone';

export interface Categoria {
  imagen: string;
  titulo: string;
  path: string;
}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  imports: [RouterModule, IonButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true
})
export class ProductosComponent  implements OnInit {

  public categorias: Categoria[] = [
    {imagen: 'https://res.cloudinary.com/dlkqs67aj/image/upload/v1729729673/ps148522851-delphi_4_pin_auto_wire_harness_pbt_pa66_automotive_ecu_connectors_ip67_ahl7lt.jpg', titulo: 'Conectores', path: '/folder/Conectores'},
    {imagen: 'https://res.cloudinary.com/dlkqs67aj/image/upload/t_Profile/v1729697355/icono-exploradoras_JCAUTOPARTES.png', titulo: 'Exploradoras', path: '/folder/Exploradoras'},
    {imagen: 'https://res.cloudinary.com/dlkqs67aj/image/upload/v1729721084/BATERIAS_fvn75d.jpg', titulo: 'Baterias', path: '/folder/Baterias'},
    {imagen: 'https://res.cloudinary.com/dlkqs67aj/image/upload/v1729720894/arranque-de-carro_fwlu7e.webp', titulo: 'Arranques', path: '/folder/Arranques'},
    {imagen: 'https://res.cloudinary.com/dlkqs67aj/image/upload/v1729702055/pngegg_3_hilj9i.png', titulo: 'Alternadores', path: '/folder/Alternadores'},
    {imagen: 'https://res.cloudinary.com/dlkqs67aj/image/upload/v1729729011/pngegg_11_1_jkim23.png', titulo: 'Bujias', path: '/folder/Bujias'},
    {imagen: 'https://res.cloudinary.com/dlkqs67aj/image/upload/v1729721533/sensor-levas_jnhank.png', titulo: 'Sensores', path: '/folder/Sensores'},
    {imagen: 'https://res.cloudinary.com/dlkqs67aj/image/upload/v1729702044/pngegg_16_fyaqi9.png', titulo: 'Frenos', path: '/folder/Frenos'},
  ];

  

  constructor() { }

  ngOnInit() {}

}
