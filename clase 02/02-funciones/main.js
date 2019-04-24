/*
let num1=10;
let num2=20;
const suma=num1+num2;

console.log(suma);

let num3=30;
let num4=40;
const suma2=num3+num4;

console.log(suma)
*/

// declaracion de una funcion

function sumatoria(){
	let num1=20;
	let num2=40;
	const suma=num1+num2;
	console.log(suma);
}
sumatoria();
// asignacion de expresion de una funcion

let sumatoria2=function(){
	let num1=20;
	let num2=40;
	const suma=num1+num2;
	console.log(suma);
}

sumatoria2();

// con paramtros y sin paremtros
// con parametros
function operacion(valor1,valor2){
	// ambito de la función
	const  suma=valor1+valor2;
	console.log(suma);
}


operacion(50,30);
operacion(0,5);
operacion(5,10);

function igv(valor){
	const igv=valor*0.18;
	console.log(igv);
}

igv(100);
igv(500);
igv(635);

let fecha=new Date();
fecha.getFullYear();
fecha.getMonth();
fecha.getDate();
fecha.getDay();

/* 
   funcion formato fecha  :  devolver la fecha actual 
   en el siguiente formato:  Martes 23 de Abril del 2019
*/
function fechaActual(fechaActual){

	let dia=fechaActual.getDate();
	let dia_semana=fechaActual.getDay();
	let mes=fechaActual.getMonth();
	let anio=fechaActual.getFullYear();
	console.log(dia);
	console.log("dia de la semana "+dia_semana);
	console.log(mes);
	console.log(anio);
	listado_dias=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]
	
	let nombre_dia=listado_dias[dia_semana]
	
	listado_meses=["Enero",
					"Febrero",
					"Marzo",
					"Abril",
					"Mayo",
					"Junio",
					"Julio",
					"Agosto",
					"Septiembre",
					"Octubre",
					"Noviembre",
					"Diciembre"];

	let nombre_mes=listado_meses[mes];
	fecha_texto=nombre_dia + " " +dia + " de "+nombre_mes+ " del "+anio;
	console.log(fecha_texto);
}	


let fechaParametro=new Date();

fechaActual(fechaParametro); 
fechaActual(fechaParametro); 
fechaActual(fechaParametro); 
fechaActual(fechaParametro); 



function limparCampos(){
 // 
 inp_nombre.value="";
 inpt_apellido.value=""

}


limpiarCampos();


// funciones con retorno y sin retorno
function nuevoIgv(valor){
	const igv=valor*0.18;
	//console.log(igv);
	return igv;
}

function login(user,pass){
	let estado;
	// validar login , definie el valor de estado; 
	// si login es correcto estado es true;
	// si login es falso estado es false;
	return estado;
}

let calculoigvb=nuevoIgv(100);
let estado_login=login("123","123");
if(estado_login==true){
	// login correcto
}
else{
	// login incorrecto
}
console.log(calculoigvb);
console.log(estado_login);








// definicion de una funcion flecha
()=>{
	console.log("hola");
} 

let suma_flecha=(valor1,valor2)=>{
	let suma=valor1+valor2;
	return suma;
}

// variantes funcion de tipo flecha
let igv_nuevo = valor => {
 	let igv=valor*0.18;
 	return igv;
}	

let igv_nuevo= valor1=> { return valor1*0.18 }

let igv_nuevo=valor1 => valor1*0.18;

let igv_nuevo=valor1 => 
{	let igv;
	igv=valor1*0.18;	
	return igv;
}


let estado_login_nuevo= estado => !estado;

let get_persona=(id)=>{
return {nombre:"Jc",Edad:20};
}
let get_persona= id => ({nombre:"Jc",Edad:20})

function suma_flecha(valor1,valor2){
	let suma=valor1+valor2;
	return suma;
}




