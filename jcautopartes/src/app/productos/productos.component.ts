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
    {imagen: 'url', titulo: 'Conectores', path: '/folder/Conectores'},
    {imagen: 'url', titulo: 'Piezas', path: ''},
    {imagen: 'url', titulo: 'Exploradoras', path: ''},
    {imagen: 'url', titulo: 'Baterias', path: ''},
    {imagen: 'url', titulo: 'Arranques', path: ''},
    {imagen: 'url', titulo: 'Alternadores', path: ''},
    {imagen: 'url', titulo: 'Bobinas', path: ''},
    {imagen: 'url', titulo: 'Sensores', path: ''},
    
  ];

  

  constructor() { }

  ngOnInit() {}

}
