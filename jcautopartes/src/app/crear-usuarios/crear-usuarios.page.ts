import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonList, IonTitle, IonToolbar } from '@ionic/angular/standalone';

import { Auth, createUserWithEmailAndPassword, getAuth } from '@angular/fire/auth';
import { notifications } from 'ionicons/icons';

@Component({
  selector: 'app-crear-usuarios',
  templateUrl: './crear-usuarios.page.html',
  styleUrls: ['./crear-usuarios.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, 
    //Paso 1: Importamos el modulo de ReactiveFormsModule
    ReactiveFormsModule, 
    IonList, IonItem, IonInput, IonButton
  ]
})
export class CrearUsuariosPage implements OnInit {

  private auth = inject(Auth);
  

  // Creamos una instancia de FormBuilder *** Paso 2 ***
  creadorForm: FormBuilder = inject(FormBuilder)

  // Creamos las variables del formulario recativo
  // Cada propiedad debe conectarse al Template con un ForControlName
  nuevoUsuario = this.creadorForm.group({ 
    nombre: ['', Validators.required ],
    apellido: [''],
    telefono: ['', Validators.required, Validators.maxLength(10)],
    correo: ['', Validators.email ],
    contrasena: ['', Validators.required]
  })

  cargando: boolean = false;

  // Funcion para crear nuevo usuario
  crearNuevoUsuario() {
    this.cargando = true; // Set loading to true

    const email = this.nuevoUsuario.value.correo;
    const password = this.nuevoUsuario.value.contrasena;

    const auth = getAuth();
    // Verificar si email y password existen
    if (email && password) { 
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert(' HAS CREADO UN NUEVO USUARIO CON ÉXTIO!')
          this.cargando = false; 
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ... tu código para manejar el error ...
          this.cargando = false; 
        });
    } else {
      // Manejar el caso en que email o password sean undefined
      console.error("Email o contraseña no proporcionados.");
      this.cargando = false; 
    }




  }
 

  constructor() { }

  ngOnInit() {
  }



}

//Instrucciones:
/*
1. Importamos el modulo de ReactiveFormsModule de Angular Forms
2. Creamos una instancia de FormBuilder de Angular Form

*/ 
