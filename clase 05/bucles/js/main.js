
listado=[1,2,3,4]; 

for(let i=0;i<listado.length;i++){
	listado[0]
	listado[1]
	listado[2]
	listado[3]
}

for (var i = listado.length - 1; i >= 0; i--) {

	listado[3]
	listado[2]
	listado[1]
	listado[0]

}


listado=[{item:"Producto01",categoria:1},
        {item:"Producto02",categoria:2},
        {item:"Producto03",categoria:3},
        {item:"Producto04",categoria:3},
        {item:"Producto05",categoria:2},
        {item:"Producto06",categoria:1},
        {item:"Producto07",categoria:1},
        {item:"Producto08",categoria:2},
        {item:"Producto09",categoria:2},
        {item:"Producto10",categoria:3},
        {item:"Producto11",categoria:3},
        {item:"Producto12",categoria:1},
        {item:"Producto13",categoria:2}]

categoria1=[]
categoria2=[]
categoria3=[]
for(let i=0;i<listado.length;i++){
	if(listado[i].categoria==1){
		categoria1.push(listado[i])
	}
	else if(listado[i].categoria==2){
		categoria2.push(listado[i])
	}else{
		categoria3.push(listado[i])
	}	
	
}
//console.log(categoria1);
//console.log(categoria2);
//console.log(categoria3);
/*
estado=true;
while(estado==true){
console.log("dentro del while");
estado=false;
}
*/
//let ingresado=prompt("ingresa  'DELETE' para continuar");
/*
let j=0;
let limite=listado.length;
while(j<limite){
	console.log(listado[j]);
	j++;
}*/
/*
let intentos=1;
while(ingresado!="DELETE"){
if(intentos<3){

	ingresado=prompt("ingresa  'DELETE' para continuar");
	intentos++;

}
else{
	console.log("se terminaron los intentos");
	break;
}

//intentos=intentos+1;
console.log(intentos);
}

*/
/*
let num1=2;

while(num1=="1"){
	console.log("entro al while");
}



num1=2;

do{
console.log("entro al do while");
}while(num1==1);


let salir
do { 
  valor = prompt("Escibre salir para terminar","") 
} while (valor != "salir")



*/
persona={
	nombre:"Juan Carlos",
	apellido:"Ramos Torriccelli",
	edad:32,
	estado:true
}

persona.nombre;
persona["nombre"];

persona.apellido;
persona["apellido"];
datos=["juan Carlos","Ramos Torriccelli",32];

for(let i=0;i<datos.length;i++){
	console.log(datos[i])
}

for(propiedad in persona){
	console.log(propiedad); // nombre
	console.log(persona[propiedad]);

}



listado=[{item:"Producto01",categoria:1,estado:1},
        {item:"Producto02",categoria:2},
        {item:"Producto03",categoria:3,estado:1},
        {item:"Producto04",categoria:3},
        {item:"Producto05",categoria:2,estado:1},
        {item:"Producto06",categoria:1},
        {item:"Producto07",categoria:1,estado:0},
        {item:"Producto08",categoria:2},
        {item:"Producto09",categoria:2,estado:1},
        {item:"Producto10",categoria:3},
        {item:"Producto11",categoria:3,estado:1},
        {item:"Producto12",categoria:1,estado:0},
        {item:"Producto13",categoria:2}]

activos=[];
inactivos=[];

for(let i=0;i<listado.length;i++){
let obj=listado[i];
 	for(propiedad in obj){
 		if(propiedad=="estado"){
 			if(obj[propiedad]==1){
 				activos.push(obj);
 			}
 			else{
 				inactivos.push(obj);
 			}
 		}
 		else{
 			console.log("el objeto no cotiene la propiedad estado");
 		}
 	}

 }
/*
for(let i=0;i<listado.length;i++){ 
	if(listado[i].estado==1){
		activos.push(listado[i])
	}
	else if(listado[i].estado==0){
		inactivos.push(listado[i])
	}
	else{

	}
}
*/

let numeros=[1,2,3,4,5,6,7];

for(let i=0;i<numeros.length;i++){
 numeros[i];
}

for(item of listado){
	console.log(item);
}
//Ejemplo: plasmar en una lista html el siguiente contenido del arreglo y contemplar un estilo visual diferente para los elementos con estado : 0

listado_final=[{item:"Producto01",categoria:1,estado:0},
 			    {item:"Producto02",categoria:2,estado:1},
 				{item:"Producto03",categoria:3,estado:1},
 				{item:"Producto04",categoria:3,estado:1},
 				{item:"Producto05",categoria:2,estado:1},
 				{item:"Producto06",categoria:1,estado:0},
 				{item:"Producto07",categoria:1,estado:1},
 				{item:"Producto08",categoria:2,estado:1},
 				{item:"Producto09",categoria:2,estado:0},
 				{item:"Producto10",categoria:3,estado:1},
 				{item:"Producto11",categoria:3,estado:1},
 				{item:"Producto12",categoria:1,estado:1},
 				{item:"Producto13",categoria:2,estado:0}]
let listado_node=document.getElementById('listado');
let template="";
for(producto of listado_final){
	
	template=template+`<li class="${producto.estado ? "activo":"inactivo"}">${producto.item}</li>`
}
listado_node.innerHTML=template;
