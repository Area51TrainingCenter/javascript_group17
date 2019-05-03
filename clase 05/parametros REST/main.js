function valores(num1=10,num2=20,num3=30){
	let suma =num1+num2+num3;
	console.log(suma);
}

valores(1,2,3,4,5,6,7);

let agregarPersona=(nombre,apellido,estado=1)=>{
return obj={
	nombre:nombre,
	apellido:apellido,
	estado:estado
}
}
agregarPersona("juan Carlos","Ramos")

let registro=(id,fecha=new Date())=>{

}



let nuevasuma=(...valores)=>{
console.log(valores);
let suma=0;
for(item of valores){
	suma=suma+item;
}
console.log(suma);
}


nuevasuma(1);
nuevasuma(1,2);
nuevasuma(1,2,3);
/*

let operacion=(operado,formato,...valores)=>{
	console.log(operador);
	console.log(formato);
	console.log(valores);
}

operacion("suma","ingles",1,2,3,4,5);

*/
let buscar=(valor_a_buscar,...universo_de_valores)=>{
for(item of universo_de_valores)
{
	if(valor_a_buscar==item){
		console.log("se encontro el valor buscado")	;

	}
		else{
	console.log("no se encontr el valor");
	}

}

}

let buscar2=(valor_a_buscar,...universo_de_valores)=>{
console.log(valor_a_buscar);
console.log(universo_de_valores);

}

listado_nombres=["luis","martin","Diego"];
let usuario={
nombre:"jc",
rol:"admin"
}
buscar(usuario.rol,"admin","empleado","tester")

buscar2("luis",listado_nombres);


Math.max(12,123,213,123,123,12,3,23,23,2,3,1,23,123,123,12)