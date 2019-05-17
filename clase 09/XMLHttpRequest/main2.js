let xhr=new XMLHttpRequest();

let cargarDatos=(url)=>{
	let urlfinal="https://reqres.in/api/users?per_page=4&page="+url;
	xhr.open("GET",urlfinal,true);
	xhr.send("");
	xhr.onload=()=>{
		let resultado=JSON.parse(xhr.responseText);

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



cargarDatos(1);
function mostrar(dato){
	cargarDatos(dato);
}