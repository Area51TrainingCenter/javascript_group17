// selecion mediante ID // devuelve 1 elemento

/*let title=document.getElementById('title');
title.innerText="Texto modificado en JS";
*/
let parrafo=document.getElementById('parrafo');
parrafo.innerText=""

/*let item1=document.getElementById('item1');

item1.classList.add("modificado");
*/

// seleccion mediante Tag // devuelve un arreglo

let listado_items=document.getElementsByTagName('li');

listado_items[0].classList.add("modificado");
listado_items[1].classList.add("modificado");
listado_items[2].classList.add("modificado");

// for
for (var i =0; i <3; i++) {
	
	listado_items[i].classList.add("modificado");
}

console.log(listado_items);





// selector por clase  // devuelve un arreglo

let listado_menu=document.getElementsByClassName("item-menu");

console.log(listado_menu);

listado_menu[0].innerText="modificado";





// selector por querySelector // un elemento 

let item_1=document.querySelector('#parrafo span');
// selector por querySelectorAll // un arreglo
let item_2=document.querySelectorAll('#parrafo span');


let btn=document.getElementById('btn-cambiar');
btn.addEventListener("click",tarea);
let modal=document.getElementById('modal');

function tarea(){
	// console.log("hizo click");
	//let title=document.getElementById('title')
	//title.innerText="Texto modificado por el usuario";
	modal.classList.remove("hide-modal");
}


let cerrar=document.getElementById("cerrar");
/*cerrar.addEventListener("click",cerrarModal)
function cerrarModal(){
	modal.classList.add("hide-modal");
}*/

cerrar.addEventListener("click",()=>{
	modal.classList.add("hide-modal")
})


