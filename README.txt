DOCUMENTACION:

BACKEND:
Arquitectura utilizada: La app se compone de un server.js que va a tener la funcionalidad de leer el puerto

el cual va a ser, por defecto el 3000 (en caso de agregarse uno diferente mediante variable de entorno).

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

Rutas: Las rutas seran:
/home
/contacto
/ubicacion

/login
/signout

/addUser
/pagos
/usuarios
/actividades


PARA REGISTRARSE NECESITAMOS la aplicacion requerira del Front UN OBJETO con al siguiente estructura:
{
  firstName: 'Martina Carolina',
  lastName: 'Perez',
  adress: 'barrio 200 vivi.',
  age: '27',
  phonenumber: '+543624779235',
  email: 'valeria123@gmail.com',
  username: 'Valeria88',
  password: 'casa123',
}
___________________________________________________________________

SI EL REGISTRO SE REALIZA DE MANERA EXITOSA, LA INFO DEL USUARIO QUEDARIA GUARDADA EN UN OBJETO
CON LA CONTRASENA ENCRIPTADA Y EL MISMO MONGO AGREGA UN ID. COMO EL SIGUIENTE:
{
  _id: new ObjectId("62eb13a3c07dc9bc13b12322"),
  firstName: 'Martina Carolina',
  lastName: 'Perez',
  adress: 'barrio 200 vivi.',
  age: '27',
  phonenumber: '+543624779235',
  email: 'valeria123@gmail.com',
  username: 'Valeria88',
  password: '$2b$10$Q6mGK/Vckr/DGD6AzDdlFeye0igBBF0MZrMdBPECCCuTTQzmu/j1q',
  __v: 0
}


DOCUMENTACION ALUMNOS: 
Tres endPoint para obtener todos los usuarios registrados, para poder buscar un alumno en particular y ver cuando pago; y un 
ultimo end point para actualizar el pago:



RUTA -> METODO: GET/alumns
res.status(200).json(alumnosTodos);
Este me devuelve todos los usuarios que se encuentran registrados con el siguiente formato:
		{"_id":"6309dd619c57f80eb38fac0c",
		"nombre":"diego",
		"apellido":"dimitroff",
		"direccion":"barrio",
		"telefono":"129831",
		"username":"dimi",
		"rol":"adm",
		"email":"diego@gmail.com",
		"password":"$2b$10$TBy2kzatbT.Hdvz44Ahr2uzqRcWH0k0802uOiq7pC7NAw7/ynf6HC",
		"fechaDePago:"sábado 27 08 2022 12:02:57",
		"created":"2022-08-27T09:01:21.911Z",
		"updated":"2022-08-27T09:01:21.911Z",
		"__v":0}

RUTA -> METODO: POST/alumn
ATENCION: RUTA ALUMN (singular... no como la anterior que es plural:"alumns")
res.status(200).json(usuarioBuscado, fechaDePago);
usuarioBuscado: Este me devuelve el usuario en particular con REQ.BODY.EMAIL en el siguiente formato:
		{"_id":"6309dd619c57f80eb38fac0c",
		"nombre":"diego",
		"apellido":"dimitroff",
		"direccion":"barrio",
		"telefono":"129831",
		"username":"dimi",
		"rol":"adm",
		"email":"diego@gmail.com",
		"password":"$2b$10$TBy2kzatbT.Hdvz44Ahr2uzqRcWH0k0802uOiq7pC7NAw7/ynf6HC",
		"fechaDePago:"sábado 27 08 2022 12:02:57",
		"created":"2022-08-27T09:01:21.911Z",
		"updated":"2022-08-27T09:01:21.911Z",
		"__v":0}
fechaDePago: Este me devuelve la fecha del ultimo pago hecho por la persona buscada en el siguiente formato:
		"fechaDePago:"sábado 27 08 2022 12:02:57"

RUTA -> METODO: POST/paymentUpdate
Enviando el e-mail del usuario  (REQ.BODY.EMAIL) este me responde:
res.status(200).json(usuarioBuscado, pagoActualizado)
usuarioBuscado: Este me devuelve el usuario en particular en el siguiente formato:
		{"_id":"6309dd619c57f80eb38fac0c",
		"nombre":"diego",
		"apellido":"dimitroff",
		"direccion":"barrio",
		"telefono":"129831",
		"username":"dimi",
		"rol":"adm",
		"email":"diego@gmail.com",
		"password":"$2b$10$TBy2kzatbT.Hdvz44Ahr2uzqRcWH0k0802uOiq7pC7NAw7/ynf6HC",
		"fechaDePago:"sábado 27 08 2022 12:02:57",
		"created":"2022-08-27T09:01:21.911Z",
		"updated":"2022-08-27T09:01:21.911Z",
		"__v":0}
pagoActualizado: Este me actualiza la fecha del ultimo pago hecho por la persona buscada en el siguiente formato:
		"fechaDePago:"sábado 27 08 2022 12:02:57"
