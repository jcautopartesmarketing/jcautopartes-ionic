# jcautopartes-ionic

# Configuración de persistencia de inicio de sesión en la app ( explicación):

Explicación detallada del fichero main.ts:

provideAuth():

Es un proveedor de Angular que configura el servicio de autenticación de Firebase
Permite que inyectes el servicio de autenticación en cualquier parte de tu aplicación


getAuth():

Obtiene la instancia de autenticación de Firebase
Esta instancia te permite manejar todo lo relacionado con la autenticación (login, logout, estado del usuario, etc.)


Capacitor.isNativePlatform():

Verifica si la aplicación está corriendo en un dispositivo móvil nativo (iOS o Android)
Retorna true si está en un dispositivo móvil
Retorna false si está en web


auth.setPersistence(indexedDBLocalPersistence):

Configura cómo se mantiene la sesión del usuario
indexedDBLocalPersistence significa que:

La sesión del usuario persistirá incluso después de cerrar la app
Los datos de autenticación se guardan en el almacenamiento local del dispositivo
El usuario no necesitará volver a iniciar sesión cada vez que abra la app