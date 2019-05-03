
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





