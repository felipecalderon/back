/*
    Datos alumno:
        -Nombre de Usuario 
        -Clave
        -Correo
        -Telefono
        -Ubicacion (sede)
        -Actividad

    Datos administrador:
        -Nombre de Usuario 
        -Clave
        -Correo
        -Telefono
        -
*/

const express = require("express")
const login = express.Router()
const loginMong = require('../modelos/usuario')

login.get("/", async (req, res) => {
    try{
        const arrayUsuarios = await loginMong.find({ idUsuario : "2"})
        console.log(arrayUsuarios)
        res.json(arrayUsuarios)
    }
    
    catch(e){
        console.log(e)
    }
});

module.exports = login