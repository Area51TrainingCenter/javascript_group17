
// varibale de texto
var dato="Texto";

dato.length // nos devuelve la cantidad de caracteres
dato.toUpperCase() // convierte la cadena en altas
dato.toLowerCase() // convierta la cadena en bajas

// variable número

var num1=20

// objeto Math
Math.pow() 
Math.sqrt()
Math.ramdom() // genera un numero aleatorio entre 0 y 1 

// varibale bool

var estado=true;



// variable arreglo
var listado=["uno","dos",3]

listado.push("cuatro") // agrega un elmeneot al final de la lista

listado.pop() // remueve el último elemento del arreglo 

listado[0] // accede al elemento en la posicion inicial , los arreglo empiezan a contar desde 0


// variable objeto
var persona={
	nombre:"Juan Carlos",
	apellidos:"Ramos Torriccelli"
}

persona.nombre // accede al valor de la propiedad nombre


// el uso de la palabra reservada let nos permite evitar la redeclaración de la variable evitando posibles erorres de sobre escritura
let nombre;


// el uso de la palabra reservada const funciona casi muy parecido a la palabra let solo que agregar la posiblidad de no poder volver a reasingar un valor.
const tipo_cambio;