import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/angular/standalone';


export interface productoInterface {
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
  public producto!: productoInterface[];

  private activatedRoute = inject(ActivatedRoute);

  Conectores: productoInterface[] = [
    {id:'1', nombre: 'Conector 1'},
    {id:'2', nombre: 'Conector 2'},
    {id:'3', nombre: 'Conector 3'}
  ]

  Piezas: productoInterface[] = [
    {id:'1', nombre: 'Pieza 1'},
    {id:'2', nombre: 'Pieza 2'},
    {id:'3', nombre: 'Pieza 3'}
  ]

    
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.producto = this.folder === 'Conectores' ? this.Conectores : this.Piezas;



  }

  
}
