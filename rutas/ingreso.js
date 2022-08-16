const express = require("express");
const login = express.Router();
const session = require("express-session");
const passport = require("passport");
const UserModel = require("../modelos/usuario");
const LocalStrategy = require("passport-local").Strategy;
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = 'secret';
  opts.issuer = 'accounts.examplesoft.com';
  opts.audience = 'yoursite.net';
const validatePass = require("../utils/passValidator");
const createHash = require("../utils/hasGenerator");

login.use(
  session({
    secret: "nocountry",
    cookie: {
      httpOnly: false,
      secure: false,
      maxAge: 300000,
    },
    rolling: true,
    resave: true,
    saveUninitialized: true,
  })
);

// INICIALIZACION DE PASSPORT:
login.use(passport.initialize());
login.use(passport.session());

// CONFIGURACION DEL COMPORTAMIENTO DE LA ESTRATEGIA:
// JSON WEB TOKEN (AUTH)
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
  User.findOne({id: jwt_payload.sub}, function(err, user) {
      if (err) {
          return done(err, false);
      }
      if (user) {
          return done(null, user);
      } else {
          return done(null, false);
          // or you could create a new account
      }
  });
}));

// LOGIN   ------------------
passport.use(
  "login",
  new LocalStrategy((username, password, done) => {
    UserModel.findOne({ username: username }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        console.log("no se encontro usuario");
        return done(null, false);
      }
      if (!validatePass(user, password)) {
        console.log("pasword invalido");
        return done(null, false);
      }
      return done(null, user);
    });
  })
);

// REGISTRO------------------
passport.use(
  "signup",
  new LocalStrategy(
    { passReqToCallback: true },
    (req, username, password, done) => {
      UserModel.findOne({ username: username }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (user) {
          console.log("el usuario ya existe");
          return done(null, false);
        }

        const NewUser = {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          adress: req.body.adress,
          age: req.body.age,
          phonenumber: req.body.phonenumber,
          username: username,
          password: createHash(password),
        };
        console.log(`Se ha creado el siguiente usuario:
      ${NewUser}`);

        UserModel.create(NewUser, (err, userWithId) => {
          if (err) {
            console.log(`Error en el registro: ${err}`);
            return done(err);
          }
          console.log(userWithId);
          console.log("registro satisfactorio");
          return done(null, userWithId);
        });
      });
    }
  )
);

// SERIALIZACION Y DESERIALIZACION:
passport.serializeUser((user, done) => {
  done(null, user._id);
});
passport.deserializeUser((id, done) => {
  UserModel.findById(id, done);
});

module.exports = login;