"use strict";

var nombre = "Juan Carlos";
console.log(nombre);

var validar = function validar() {
  console.log("hola");
};

var apellido = "RT";
var edad = 20;

var calcular = function calcular() {
  for (var _len = arguments.length, datos = new Array(_len), _key = 0; _key < _len; _key++) {
    datos[_key] = arguments[_key];
  }

  for (var _i = 0, _datos = datos; _i < _datos.length; _i++) {
    var item = _datos[_i];
    console.log(item);
  }
};

var consulta = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Termino la promesa");
  }, 3000);
}).then(function (data) {
  console.log(data);
});

var dato1 = 2,
    dato2 = 3;
console.log(dato1);