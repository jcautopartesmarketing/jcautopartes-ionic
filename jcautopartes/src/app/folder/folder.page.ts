
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/angular/standalone';

export interface ProductoInterface { // Use PascalCase for interface names
  id: string;
  nombre: string;
}

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, CommonModule],
})
export class FolderPage implements OnInit {
  public folder!: string;
  public productos!: ProductoInterface[]; // Renamed to 'productos' for clarity

  private activatedRoute = inject(ActivatedRoute);

  private productosData: { [key: string]: ProductoInterface[] } = { // Use an object to store product data
    Conectores: [
      { id: '1', nombre: 'Conector 1' },
      { id: '2', nombre: 'Conector 2' },
      { id: '3', nombre: 'Conector 3' },
    ],
    Piezas: [
      { id: '1', nombre: 'Pieza 1' },
      { id: '2', nombre: 'Pieza 2' },
      { id: '3', nombre: 'Pieza 3' },
    ],
    Exploradoras: [
      { id: '1', nombre: 'Exploradoras 1' },
      { id: '2', nombre: 'Exploradoras 2' },
      { id: '3', nombre: 'Exploradoras 3' },
    ],

    Arranques: [
      { id: '1', nombre: 'Arranques 1' },
      { id: '2', nombre: 'Arranques 2' },
      { id: '3', nombre: 'Arranques 3' },
    ],
  };

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.productos = this.productosData[this.folder] || []; // Assign products using the object 
  }
}
