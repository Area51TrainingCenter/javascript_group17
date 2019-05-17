

let xhr=new XMLHttpRequest();
console.log(xhr);
let url="https://reqres.in/api/users?per_page=4&page=1";
//console.log(xhr.readyState);
xhr.open("GET",url,true); // true = asicrono , False = sincrono
//console.log(xhr.readyState);
xhr.send(""); // 2 segundos
/*
xhr.onload=()=>{
	console.log(xhr.readyState);
	console.log(xhr.responseText);
}*/
xhr.onreadystatechange=()=>{
	//console.log(xhr.readyState);
	/*if(xhr.readyState==2){
		xhr.abort();
	}*/
	if(xhr.readyState==4){
		if(xhr.status==200){
			console.log(xhr.responseText);	
			let resultado=JSON.parse(xhr.responseText);
			console.log(resultado);
			let listado=resultado.data;
			let temporal=""
			for(item of listado){
				console.log(item);
				temporal=temporal+`<article class="item">
					<img src="${item.avatar}">
					<div>
						<h2>${item.first_name} ${item.last_name}</h2>
						<a href="mailto:${item.email}">${item.email}</a>
					</div>
				</article>`;
			}
			document.getElementById('listado').innerHTML=temporal;


		}
			
	}

}

document.getElementById('nav-2').addEventListener("click",()=>{
	
})





/*
*0	No inicializado (objeto creado, pero no se ha invocado el método open) 
*1	Cargando (objeto creado, pero no se ha invocado el método send) 
*2	Cargado (se ha invocado el método send, pero el servidor aún no ha respondido) 
*3 Interactivo (se han recibido algunos datos, aunque no se puede emplear la propiedad responseText) 
*4	Completo (se han recibido todos los datos de la respuesta del servidor)
*/
/*
GET
POST
DELETE // POST
PUT // POST

form action contacto.html  method GET
input text id=name
input txt id=apellido

index.html

contacto.html/?name="jc"&apellido="ramos"

POST
contacto.html
$_[POST]->name
*/


