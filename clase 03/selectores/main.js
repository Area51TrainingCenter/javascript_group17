let opcion_grabar=document.getElementById('btn-grabar');
opcion_grabar.addEventListener("click",grabar);

function grabar(){
event.preventDefault(); // anular todo lo fue definido al boton en el caso que sea definido como un submit
//console.log("Hizo click en el boton grabar");
let nombre=document.getElementById('inp_nombre');

let correo=document.getElementById('inp_correo');
let contrasena=document.getElementById('inp_contrasena');
let facebook=document.getElementById('inp_facebook');
let caracteres_nombre=nombre.value.length;
console.log("la cantidad de caracteres es :" ,caracteres_nombre);

let error=document.getElementById("error-nombre");
if(caracteres_nombre>1){
	error.classList.add("hide-msg")
	console.log("el valor de nombres de valido");
 // se ejecuta siempre y cuando la condicion devuelva verdadero;
}else{
 // se ejecuta si la condicion devuelve falso;
 console.log("el campo nombre no cumple con los requisitos");
 
 //error.classList.add()// agregar clases
 error.classList.remove("hide-msg");// remove clases


}
/*
let contenido=document.getElementById("contenido_registro");
contenido.innerHTML="<div><strong>"+correo.value+"</strong>"
					+"<h2>"+nombre.value+"</h2>"
					+"<a href='"+facebook.value+"'>Facebook</a></div>";

*/

}