let grabar=document.getElementById('grabarContacto');


let objContacto=new Contacto();
grabar.addEventListener("click",()=>{
	
	let datos=new FormData(document.getElementById("registro"));

	/*datos.get("nombre")
	datos.get("apellido")
	datos.get("telefono")
	datos.get("dni")*/

	let valores=[datos.get("nombre"),
				 datos.get("apellido"),
				 datos.get("telefono"),
				 datos.get("dni")]


	
	objContacto.agregarContacto(...valores);



	/*

	let registro=document.getElementById("registro");
	console.log(registro);
	console.log(datos);
	datos.append("nombre","juan carlos"),
	datos.append("dni","123341233")
	console.log(datos.nombre);*/

})


