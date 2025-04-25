export interface ProductInterface {
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
