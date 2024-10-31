import { Injectable, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,  } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  auth: Auth = inject(Auth); // Creamos una variable para instanciar el servicio de AUTH de Firebase

  constructor() { }

  //Funcion para crear usuarios con email y password
  async createUser(email: string, password: string) {
    const user = await createUserWithEmailAndPassword(this.auth, email, password);
    return user;
  }

  //Funcion para iniciar sesion con email y password
  async login(email: string, password: string) {
    const user = await signInWithEmailAndPassword(this.auth, email, password);
    return user;
  }

}
