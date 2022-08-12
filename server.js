//llamado a módulos y def de puertos
const express = require("express");

const app = express();
const port = 3050

// parse solicitudes get y post
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//conexión a mongoDB - SEGURIDAD CON VARIABLES DE ENTORNO
var mongoose = require('mongoose');

const usr = 'usertest'
const pwr = 'tnZ1oURXdYDPmr9X'
const db = 'sysgym'
const uri = `mongodb+srv://${usr}:${pwr}@cluster0.1xynyxj.mongodb.net/${db}?retryWrites=true&w=majority`;
mongoose.connect(uri, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
})
.then(() => console.log('conectado a mongo'))
.catch(e => console.log(e))

//ruta demo passport
var ingreso = require('./rutas/ingreso');
app.use('/ingreso', ingreso);

app.use('/vistaform', authRouter);
//Ruta ingreso usuario (login):
const login = require('./rutas/login')

//Ruta sistema (despues de inicio):
const sistema = require('./rutas/sistema')

//Llamando a las rutas:
app.use(login)
app.use(sistema)

//Puerto
app.listen(port, () => {
  console.log(`Funcionando en http://localhost:${port}`);
});