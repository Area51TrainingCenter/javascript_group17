let grabar=document.getElementById('grabarContacto');


let objContacto=new Contacto(); // aqui se ejecuta el constructor
grabar.addEventListener("click",()=>{
	
	let datos=new FormData(document.getElementById("registro"));



	let valores=[datos.get("nombre"),
				 datos.get("apellido"),
				 datos.get("telefono"),
				 datos.get("dni")]


	
	objContacto.agregarContacto(...valores);
	let estructura=objContacto.listadoHtml();
	document.getElementById("listado").innerHTML=estructura;


})


function verdatalle(valor){
	console.log(valor);
	alert("click en li")
	//Contacto.seleccionado(valor)
}