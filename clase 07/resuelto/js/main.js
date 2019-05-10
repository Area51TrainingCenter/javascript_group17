let btn1=document.getElementById('registrar');
let detalle_registro=document.getElementById("detalle-registro");



btn1.addEventListener("click",()=>{
event.preventDefault();
detalle_registro.style.display="block";

})


	let nombre=document.getElementById("nombre");
 	let fecha=document.getElementById("fecha");
 	let hora=document.getElementById("hora");
 	let tipo=document.getElementById("tipo");


 
tipo_lista=["seleccionar","importante","Necesario","urgente"]

 let registro=document.getElementById("registro-final");
 let listado_registros=[];
 
 let lista_ativada=document.getElementById("listado-activadas");


 registro.addEventListener("click",()=>{
 	/*let nombre=document.getElementById("nombre").value;
 	let fecha=document.getElementById("fecha").value;
 	let hora=document.getElementById("hora").value;
 	let tipo=document.getElementById("tipo").value;
	*/
	/*console.log(nombre.value);
	console.log(fecha.value);
	console.log(hora.value);
	console.log(tipo.value);*/
	let obj={
		nombre_obj:nombre.value,
		fecha_obj:fecha.value,
		hora_obj:hora.value,
		tipo_obj:tipo.value,
		estado_obj:true
	}

	listado_registros.push(obj);
 	console.log(listado_registros);

 	listadoDatos();


 })

function listadoDatos(){
	let temporal_activos="";
	let tempora_inactivos="";
	for(let i=0;i<listado_registros.length;i++){
		if(listado_registros[i].estado_obj==true){
			temporal_activos=temporal_activos+`<li onclick="verdetalle(${i})" >${listado_registros[i].nombre_obj}</li>`
		}
		else{
			tempora_inactivos=tempora_inactivos+`<li onclick="verdetalle(${i})" >${listado_registros[i].nombre_obj}</li>`	
		}
	}
 	lista_ativada.innerHTML=temporal_activos;
 	 	lista_inactiva.innerHTML=tempora_inactivos;

}
/*
 function listadoActivados(){
	let temporal="";
	/*let ind=0;
	for(item of listado_registros){

		temporal=temporal+`<li onclick="verdetalle(${indice})" >${item.nombre_obj}</li>`
		ind++;
	}
7

	for(let i=0;i<listado_registros.length;i++){
		temporal=temporal+`<li onclick="verdetalle(${i})" >${listado_registros[i].nombre_obj}</li>`
	}
 	lista_ativada.innerHTML=temporal;
 } 
*/
let lista_inactiva=document.getElementById("listado-inactivadas");
/*function listadoInactivos(){
	let temporal="";
	for(let i=0;i<listado_registros.length;i++){
		if(listado_registros[i].estado_obj==false){
			temporal=temporal+`<li onclick="verdetalle(${i})" >${listado_registros[i].nombre_obj}</li>`
	
		}
	}
 	lista_inactiva.innerHTML=temporal;
}*/



let detalle=document.getElementById("detalle-obj");

let indice_objecto_actual;

let finalizar=document.getElementById("fin-tarea");
function verdetalle(ind){
	indice_objecto_actual=ind;
	finalizar.setAttribute("data-actual",ind);

	console.log(ind);
	let obj=listado_registros[ind];
	detalle.innerHTML=`
				<h2 id="nombre_tarea" class="h5">${obj.nombre_obj}</h2>
				<ul>
					<li>Fecha: ${obj.fecha_obj}</li>
					<li>Hora: ${obj.hora_obj}</li>
					<li><strong>Tipo: : ${obj.tipo_obj}</strong></li>
				</ul>
				`

}

 /*function listadoInactivos(){
	let temporal="";
	for(item of listado_registros){
		temporal=temporal+`<li>${item.nombre_obj}</li>`
	}
 	lista_ativada.innerHTML=temporal;
 }*/


finalizar.addEventListener("click",()=>{
	listado_registros[indice_objecto_actual].estado_obj=false;
	listadoDatos();
})
 
