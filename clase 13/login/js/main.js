let usuario=new Usuario();

document.getElementById('grabar').onclick=()=>{
	//
	let nombre=document.getElementById("usuario").value;
	let password=document.getElementById("password").value;
	let estado=usuario.validar(nombre,password);
	
	
	



}