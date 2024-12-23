
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import
 { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/angular/standalone';

export interface ProductoInterface {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  cod: string;
  precio: number;
  stock: number;
  activo: boolean;
}

@Component({
  selector: 'app-folder',
  templateUrl
: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, CommonModule,
    IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton
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
    this.folder.set(this.activatedRoute.snapshot.paramMap.get('id') as string); 
    this.loadProducts();
  }


  // Funciones para cargar los productos
  async loadProducts() {
    const productsCollection = collection(this.firestore, this.folder()); // Get the collection based on the folder
    
    // Use collectionData with a signal to update the products
    collectionData(productsCollection, { idField: 'id' }).subscribe(products => {
      this.productos.set(products as ProductoInterface[]);
    });
  }
}
