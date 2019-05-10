let datos=["Juan Carlos", "Ramos","jtorriccelli@gmail.com",false];
/*console.log(datos[0]);
console.log(datos[1]);
console.log(datos[2]);
let nombre;
let apellido;
let correo;

nombre=datos[0];
apellido=datos[1];
correo=datos[2];
*/
/*
let [nombre,,correo,estado=true]=datos;
console.log(nombre);
console.log(correo);
console.log(estado);

crear("jc","rt","10/10/1029");


function crear(nombre,apellido,fecha="01/01/2019"){
	//tarea
}




let actualizar=([nombre,apellido])=>{
	console.log(nombre);
	console.log(apellido);

}
let persona=["juan","ramos"];
actualizar(persona)


let actualizar2=(nombre,apellido)=>{
	console.log(nombre);
	console.log(apellido);
}

actualizar2(persona[0],persona[1]);
*/
/*

const persona=["Juan Carlos",20,"Desarrollador"]

// creamos una función que el parametro que reciba lo va a desestructurar para poder ser usado de manera independiente en el ambito de la función
	const mostrardatos=([nombre,edad,profesion])=>{
		console.log(nombre);
		console.log(edad)
		console.log(edad)
	}

	mostrardatos(persona);




*/






let curso={
	nombre:"HTML",
	frecuencia:"M-J",
	horario:"7-10",
	asdasdasd:34
}

curso.nombre;
curso.frecuencia;
curso.horario;

let {nombre,horario,estado=true} =curso;

console.log(nombre);
console.log(horario);



function leerObjeto(item){
		item.nombre
}
function leerObjeto({nombre,codigo,rango="profesor"}){
		console.log(nombre);
		console.log(codigo);
		console.log(rango);
}		



obj={
	nombre:"Jc",
	apellido:"rt",
	codigo:123,
	estado:true
}


leerObjeto(obj)


