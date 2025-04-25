
// Angular
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Angular Fire
import { collection, collectionData, Firestore, query, where } from '@angular/fire/firestore';

// Interface
import { ProductInterface } from 'src/interfaces/product-interface';

// Ionic
import { IonicModulesModule } from './ionic-modules/ionic-modules.module';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [
    CommonModule,       // Vene del Core de Angular
    IonicModulesModule  // Grupo de modulos para mejor lectura, creado por mi mismo dentro del folder.
  ],
})
export class FolderPage implements OnInit {

  // Instancia de Firestore
  firestore: Firestore = inject(Firestore);
  private activatedRoute = inject(ActivatedRoute);

  // Variables para almacenar la carpeta y los productos
  public folder = signal<string>('');
  public productos = signal<ProductInterface[]>([]);
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


  // Mètodo para ller productos.
  async loadProducts() {
    try {
      const productsCollection = collection(this.firestore, 'Productos');
      const q = query(productsCollection, where('folderId', '==', this.folder()));
      
      collectionData(q, { idField: 'id' }).subscribe({
        next: (data) => {
          // Casting explícito
          this.productos.set(data as ProductInterface[]);
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
