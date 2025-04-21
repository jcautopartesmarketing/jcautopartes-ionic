import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules, withViewTransitions } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
//Firebase
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, indexedDBLocalPersistence, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from './environments/environment.prod';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { Capacitor } from '@capacitor/core';


bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      provideIonicAngular(),
      provideRouter(routes, withPreloading(PreloadAllModules), withViewTransitions()), 

    //Firebase inicialización
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)), 

    // Firebase con persistencia de datos en el dispositivo
    provideAuth(() => {
      const auth = getAuth();
      if (Capacitor.isNativePlatform()) {
        auth.setPersistence(indexedDBLocalPersistence);
      }
      return auth;
    }), 
    provideFunctions(() => getFunctions()),
    provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, 
    provideFirestore(() => { return getFirestore(); }), 
    provideStorage(() => getStorage()), 
    provideFirebaseApp(() => initializeApp({
      "projectId":"jcautopartes",
      "appId":"1:830834835021:web:ea3261f91e3151e6cfe604",
      "storageBucket":"jcautopartes.appspot.com",
      "apiKey":"AIzaSyDt_Vtb3GDIfLfCAt9Z60bw3ItUdBQ-XLg",
      "authDomain":"jcautopartes.firebaseapp.com",
      "messagingSenderId":"830834835021",
      "measurementId":"G-NZJBSZ3TWM"})), 
    provideFunctions(() => getFunctions()),
  ],
})


