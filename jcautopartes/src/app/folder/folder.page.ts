
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { collection, collectionData, Firestore, query, where } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonRow, IonTitle, IonToolbar } from '@ionic/angular/standalone';

 

export interface ProductoInterface {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  cod: string;
  precio: number;
  stock: number;
  folderId: string; // Add folderId
  activo: boolean;  
}

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonButtons, IonMenuButton, 
    IonTitle, IonContent, CommonModule,
    IonGrid, IonRow, IonCol, IonCard, IonCardHeader, 
    IonCardTitle, IonCardSubtitle, IonCardContent, IonButton
  ],
})
export class FolderPage implements OnInit {

  // Instancia de Firestore
  firestore: Firestore = inject(Firestore);
  private activatedRoute = inject(ActivatedRoute);

  // Variables para almacenar la carpeta y los productos
  public folder = signal<string>('');
  public productos = signal<ProductoInterface[]>([]);
  public subTitle!: string;

  ngOnInit() {
    const folderId = this.activatedRoute.snapshot.paramMap.get('id');
    if (folderId) {
      this.folder.set(folderId);
      this.loadProducts();
    } else {
      console.error('No se proporcionó ID de carpeta en los parámetros de ruta');
      // Manejar el caso donde no se proporciona ID de carpeta
    }
  }


  // Funciones para cargar los productos
  async loadProducts() {
    try {
      const productsCollection = collection(this.firestore, 'Productos');
      const q = query(productsCollection, where('folderId', '==', this.folder()));
      
      collectionData(q, { idField: 'id' }).subscribe({
        next: (data) => {
          // Casting explícito
          this.productos.set(data as ProductoInterface[]);
        },
        error: (error) => {
          console.error('Error al obtener productos:', error);
        }
      });
    } catch (err) {
      console.error('Error en loadProducts:', err);
    }
  }
}
