/*let listado=[1,2,3,4,5];
// indice de un arreglo , empiezan en 0

let listado=["uno","dos","tres"];

let listad=[1,"dos",true];

let obj={
	nombre:"JC",
	correo:"jt@gmail.com"
}

let listado=[obj,obj,obj]
*/
/*
let dias=["l","m","m","j","v","s","d",[1,2,3]];
let meses=["E","F","D"];

let fechas=[dias,meses];
//let fechas=[["l","m","m","j","v","s","d"],["E","F","D"]]
console.log(fechas);
let _dias=fechas[0];
console.log(_dias);
console.log(_dias[7]);
fechas[0][7][0];


// declaracion de un arreglo

let numeros=[1,2,3];

let numeros=[1];


let numeros_2=new Array(1,2,3,4);

let numeros_2=new Array(5,2,3,4,5);



let datos=["juan Carlos","Ramos","jc@gmail.com"];

let datos=[0=>"Juan Carlos",1=>"RAmos",2=>"jc@gmail.com"];
datos[0]


let persona =[nombre=>"jc",apellido=>"rt",codigo=>"123"]
persona[nombre]
persona[apellido]


datos={
	nombre:"Jc",
	apellido:"Rt"
}

validar(datos);

function validar(valor1){

	for(item of valor1){

	}
	console.log(tipo);
}
*/
datos={
	nombre:"Jc",
	apellido:"Rt"
}
let listado=["juan Carlos","Ramos","jc@gmail.com"];

let tipo = typeof listado;
console.log(tipo);

let tipo2=Array.isArray(listado);
console.log(tipo2);

let tipo3=listado.constructor.toString().indexOf("Array");
console.log(tipo3);


let tipo4=listado instanceof Array;
console.log(tipo4);


