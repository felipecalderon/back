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

DOCUMENTACION ALUMNOS
RUTA -> METODO: GET/alumns
La ruta usa this.controler.getAlumns

metodos: 
 1- Obtener todos los Usuarios: this.app.readTodos()
	EJEMPLO EN CODIGO: let alumnosTodos= await this.app.readTodos()
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
		"IdDelPago":"6309dd619c57f80eb38fac0a",
		"created":"2022-08-27T09:01:21.911Z",
		"updated":"2022-08-27T09:01:21.911Z",
		"__v":0}
	Observese que el usuario cuenta con un "IdDelPago", el cual podra ser utilizado con el metodo search para poder obtener su ifo de pago
2- 

RUTA -> METODO: POST/alumn
El metodo post de este endPoint nos devuelve: La busqueda de un alumno la info particular de un usuario, la fecha de su pago y la actualizacion de su pago

 1- Obtener info de un usuario en particular: this.app.buscarUsuario(data)
	EJEMPLO EN CODIGO: let usuarioBuscado= await this.app.buscarUsuario(req.body.username)
			   let usuarioBuscado= await this.app.buscarUsuario(req.body.email)
	usuarioBuscado: Este me devuelve todos los usuarios que se encuentran registrados con el siguiente formato:
		{"_id":"6309dd619c57f80eb38fac0c",
		"nombre":"diego",
		"apellido":"dimitroff",
		"direccion":"barrio",
		"telefono":"129831",
		"username":"dimi",
		"rol":"adm",
		"email":"diego@gmail.com",
		"password":"$2b$10$TBy2kzatbT.Hdvz44Ahr2uzqRcWH0k0802uOiq7pC7NAw7/ynf6HC",
		"IdDelPago":"6309dd619c57f80eb38fac0a",
		"created":"2022-08-27T09:01:21.911Z",
		"updated":"2022-08-27T09:01:21.911Z",
		"__v":0}
		Enviando el username o el email del usuario buscado se podra encontrar de manera exitosa al mismo
	fechaDePago: Este me devuelve FECHA del pago el siguiente formato:
		[ { fechaDePago: 2022-08-27T09:01:21.624Z } ]

RUTA -> METODO: POST/paymentUpdate
El metodo post de este endPoint nos devuelve: La info del Usuario que actualizo su pago y su fecha

 1- Para actualizar el pago: this.pagos.update(id, req.body.pagoNuevo)
	Es metodo de manera automatica actualiza la fecha ESTOY TRABAJANDO EN ELLO TODAVIA