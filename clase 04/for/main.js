
alumnos=["Juan Carlos",
		"Diego",
		"Luciana",
		"Sofia",
		"Martin"]
contenedor=document.getElementById('listado');
/*
console.log(alumnos[0]); //juan carlos
console.log(alumnos[1]); // Diego
console.log(alumnos[2]); // Martín
console.log(alumnos[3]);
*/
let limite=alumnos.length; // devuelve la cantidad de elementos de un arreglo

for(let i=0;i<limite;i++){
	//console.log(alumnos[i])
	//let temporal=contenedor.innerHTML;
	//contenedor.innerHTML=`${temporal}<li>${alumnos[i]}</li>`;
 
    let elemento=document.createElement("li"); // <li></li>
    let texto=document.createTextNode(alumnos[i]); //  Hola
    elemento.appendChild(texto) // <li>Hola</li>
   	contenedor.appendChild(elemento);
}

/*


for(let i=1;i<13;i++){
	//console.log(i+" * 5 = "+(i*5));
	//console.log(`${i} * 5 = ${i*5}`);
	for (let j=1;j<13;j++){
      // linea de codigo

      console.log(`${i} * ${j} = ${i*j}`);

	}

	
}
*/
/*
let cadena ="texto" + variable
            +"texto3"
            +"Texto4";

let cadena_nueva = `texto
					textp 
					texdf 
					dsfsdf`

let cadena_nueva = `${i} * 5 = ${i*5} cadena valor`
					i + " * 5 = "+ (i*5) +" cade" +valor				

*/


