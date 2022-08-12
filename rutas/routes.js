const express = require("express");

const route = express.Router();
const passport = require("passport");

const controlers = require("../src/controler");

route.get("/login", controlers.getLogin);
route.post(
  "/login",
  passport.authenticate("login", { failureRedirect: "/failLogin" }),
  controlers.postLogin
);

route.get("/failLogin",( req, res)=>{
    res.send("ALGO FALLO")
});

// sistema.get("/admin",  (req, res) => {
//     res.json({
//         usuarioLogueado: {
//             idUsuario: 1,
//             nombreUsuario: "Felipe",
//             claveUsuario: "clave123#debe-estar-encriptada",
//             tipoUsuario: "Administrador",
//             },
//         usuariosAlumnos:
//             [
//                 {
//                     idUsuario: 2,
//                     tipoUsuario: "Alumno",
//                     datosPersonales: {
//                         nombreUsuario: "Benjamin",
//                         apellidoUsuario: "Castro",
//                         actividades: ["zumba", "calistenia"],
//                     },
//                     fichaMedica: {
//                         patologias: ['Artritis', 'Artrosis', 'Cáncer', 'Tumor vertebral'],
//                         lesiones: ['esguínce de rodilla', 'lumbagia'],
//                     },
//                     pagos: {
//                         fechaInicio: "01/04/2022",
//                         fechaFin: "01/09/2022",
//                         estadoPago: "Pagado",
//                 }},
//                 {
//                     idUsuario: 3,
//                     tipoUsuario: "Alumno",
//                     datosPersonales: {
//                         nombreUsuario: "Juanito",
//                         apellidoUsuario: "Perez",
//                         actividades: ["running", "natación"],
//                     },
//                     fichaMedica: {
//                         patologias: ['Artritis', 'Tumor vertebral'],
//                         lesiones: ['lumbagia'],
//                     },
//                     pagos: {
//                         fechaInicio: "01/01/2022",
//                         fechaFin: "01/02/2022",
//                         estadoPago: "Pendiente",
//                 }},
//                 {
//                     idUsuario: 4,
//                     tipoUsuario: "Alumno",
//                     datosPersonales: {
//                         nombreUsuario: "Marcelo",
//                         apellidoUsuario: "Benavides",
//                         actividades: ["pole dance"],
//                     },
//                     fichaMedica: {
//                         patologias: ['Cáncer'],
//                         lesiones: ['esguínce de rodilla'],
//                     },
//                     pagos: {
//                         fechaInicio: "01/01/2022",
//                         fechaFin: "01/02/2022",
//                         estadoPago: "Pendiente",
//                 }},
//         ],
//         actividades: [
//         {
//             idActividad: 1,
//             nombreActividad: "Zumba",
//             duracionActividad: 60,
//             lugarActividad: "sala 5",
//             horarioActividad: [
//                 {
//                     lunes: ["09:30", "15:30", "19:00"],
//                     miercoles: ["14:30", "22:00"],
//                     viernes: ["12:30", "21:00"]
//                 }
//             ],
//         },
//         {
//             idActividad: 2,
//             nombreActividad: "Calistenia",
//             duracionActividad: 30,
//             lugarActividad: "sala 5",
//             horarioActividad: [
//                 {
//                     martes: ["14:30", "15:30", "19:00"],
//                     jueves: ["15:30", "19:00"],
//                     sabado: ["11:30"]
//                 }
//             ],
//         },
//         {
//             idActividad: 3,
//             nombreActividad: "Pole Dance",
//             duracionActividad: 45,
//             lugarActividad: "sala 5",
//             horarioActividad: [
//                 {
//                     martes: ["08:30"],
//                     jueves: ["11:30", "15:00"],
//                     sabado: ["12:30", "15:30", "21:00"]
//                 }
//             ],
//         },
//     ],
//     })
// })

// sistema.get("/alumno", (req, res) => {
//     res.json({
//         usuarioLogueado: {
//             idUsuario: 2,
//                     tipoUsuario: "Alumno",
//                     datosPersonales: {
//                         nombreUsuario: "Benjamin",
//                         apellidoUsuario: "Castro",
//                         actividades: ["zumba", "calistenia"],
//                     },
//                     fichaMedica: {
//                         patologias: ['Artritis', 'Artrosis', 'Cáncer', 'Tumor vertebral'],
//                         lesiones: ['esguínce de rodilla', 'lumbagia'],
//                     },
//                     pagos: {
//                         fechaInicio: "01/04/2022",
//                         fechaFin: "01/09/2022",
//                         estadoPago: "Pagado",
//                 }},
//         actividades: [
//         {
//             idActividad: 1,
//             nombreActividad: "Zumba",
//             duracionActividad: 60,
//             lugarActividad: "sala 5",
//             horarioActividad: [
//                 {
//                     lunes: ["09:30", "15:30", "19:00"],
//                     miercoles: ["14:30", "22:00"],
//                     viernes: ["12:30", "21:00"]
//                 }
//             ],
//         },
//         {
//             idActividad: 2,
//             nombreActividad: "Calistenia",
//             duracionActividad: 30,
//             lugarActividad: "sala 5",
//             horarioActividad: [
//                 {
//                     martes: ["14:30", "15:30", "19:00"],
//                     jueves: ["15:30", "19:00"],
//                     sabado: ["11:30"]
//                 }
//             ],
//         },
//         {
//             idActividad: 3,
//             nombreActividad: "Pole Dance",
//             duracionActividad: 45,
//             lugarActividad: "sala 5",
//             horarioActividad: [
//                 {
//                     martes: ["08:30"],
//                     jueves: ["11:30", "15:00"],
//                     sabado: ["12:30", "15:30", "21:00"]
//                 }
//             ],
//         },
//     ],
//     })
// })

module.exports = route;
