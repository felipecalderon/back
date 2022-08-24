DOCUMENTACION:

BACKEND:
Arquitectura utilizada: La app se compone de un server.js que va a tener la funcionalidad de leer el puerto
el cual va a ser, por defecto el 3000 (en caso de agregarse uno diferente mediante variable global).
 Entre otras cosas la arquitectura esta prediseña con el objetivo de ser escalable en su DBS, pudiendo
agregare cuanta base de datos se requiera mediante un metodo que se encontrara en la clase Factory en el
factory.js. Esta funcionalidad se dará mediante parametro agregado al arrancar la applicacion: actualmente los
parametros disponibles seran "mongo" (la cual actua por defecto en caso de no colocar parametro alguno) y 
"file" como para comenzar el trabajo mediante el manejo de file system.

Integracion: El archivo factory.js cuenta con la utilizacion de un archivo estatico denominado
getInstance(), utilizando el patro de diseño Singleton a fin de requerir una unica vez en el server la instan-
ciacion del factory, y consecuentemente con ello todos sus metodos (es decir, en este caso, la DBS seleccionada)

Seguridad: Se utiliza como centro de accion un controller.js, el cual va a tomar los metodos requeridos para 
la obtencio de informacion de la dbs de un contenedor.js y este a su vez de un DAO.js pertinente. Mientras que
la logica se encontrara integrada en un service.js (el cual a su vez utilizara los metodos de la DBS utilizada)
todo esto se encontrara integrado segun la ruta selecionada.

Rutas: Las rutas PUBLICAS seran:

/home
/contacto
/ubicacion

Rutas de ACCESO:
/login
/adduser


Rutas internas necesarias con TOKEN:
/adduser
/activity/add
/activity/update
/activity/delete
/activity/get
/activity/get/:nombre

PARA REGISTRARSE NECESITAMOS la aplicacion requerira del Front UN OBJETO con al siguiente estructura:
{
    nombre: "felipe",
    apellido: "calderone",
    direccion: "calle1234",
    telefono: "12351312",
    username: "felipe1",
    rol: "admin",
    email: "correo",
    password: "$2b$10$CHiBZr/p1ynG3qolZw6y8eolFUiNGr3qBC1PGejV35mu6G.mAw.8W",
    created: 2022-08-22T23:02:09.496+00:00,
    updated :2022-08-22T23:02:09.496+00:00
}
___________________________________________________________________

SI EL REGISTRO SE REALIZA DE MANERA EXITOSA, LA INFO DEL USUARIO QUEDARIA GUARDADA EN UN OBJETO
CON LA CONTRASENA ENCRIPTADA Y EL MISMO MONGO AGREGA UN ID. COMO EL SIGUIENTE:
{
    _id: new ObjectId("62eb13a3c07dc9bc13b12322"),
    nombre: "felipe",
    apellido: "calderone",
    direccion: "calle1234",
    telefono: "12351312",
    username: "felipe1",
    rol: "admin",
    email: "correo",
    password: "$2b$10$CHiBZr/p1ynG3qolZw6y8eolFUiNGr3qBC1PGejV35mu6G.mAw.8W",
    created: 2022-08-22T23:02:09.496+00:00,
    updated :2022-08-22T23:02:09.496+00:00
  __v: 0
}