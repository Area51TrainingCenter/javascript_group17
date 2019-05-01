let btn_grabar=document.getElementById('grabar');
let listado=document.getElementById("listado");

listado_registros=[];


btn_grabar.addEventListener("click",()=>{
let nombre=document.getElementById("inp-nombre").value;
let detalle=document.getElementById("inp-detalle").value;

let registro={
	nombre_:nombre,
	detalle_:detalle
};

listado_registros.push(registro);
estructura="";
for(let i=0;i<listado_registros.length;i++){
	let nombre=listado_registros[i].nombre_;
	estructura=estructura+`<li onclick="verdetalle(${i})"">${nombre}</li>`;
}
listado.innerHTML=estructura;
//	


})

let verdetalle=(indice)=>{
	console.log(indice);
	console.log(listado_registros[indice].detalle_)
	let detalle=document.getElementById("detalle");
    detalle.innerHTML=listado_registros[indice].detalle_;
}

// lista para agregar elementos


