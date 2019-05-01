/*
if(condicion){
	// en caso la condicion devuelva positivo
}
else{
	// en caso la condicion devuelva negativo
}
*/
let edad=10;
if(edad>18){
	console.log("Es mayor de edad")
}
else{
	console.log("Es menor de edad")

}

let num1=10;
let num2=19;
let num3=130;

if(num1>num2){
  // num1 es mayor al num2 
  if(num1>num3){
  	 // num1 es mayor que num3 => es el mayor de los 3
  }
  else{
  	 // num3 es el mayor de los 3
  }
}else{
  //num2 es mayor num1
  if(num2>num3){
  	//num2 es el mayor de los 3
  }
  else{
  	// num3 es el mayor de los 3
  }
}
if(num1>num2){

}
num1=5;
num2=3;
num3=6;

if(num1>num2 && num1>num3 && num1>num4){
 // maoyr num1
}
else{
	if(num2>num1 && num2>num3){
    // mayor num2
	}
	else{
		// mayor num3
	}
}
// let mayor=Math.max(num1,num2,num3);



//let edad;

/*
0-19 pulpin
20-35 medio pulpin
35 -45 a más Pulpin Jr
45-a mas
*/
if(edad<=19){
	// pulpin
}
else{
  if(edad<=35){
  	// medio pulpin
  }else{
  	if(edad<=45){
  		//otro
  	}
  	else{
  		// a más
  	}
  }
}

if(edad<19){
	// valor 1
}
else if(edad<35){

}
else if(edad<45)
{

}else if(edad <50){

}
else{

}
/*
condicion ? codigo1 : codigo1

if(condicion){
	codigo1
}
else{
	codigo2
}*/

let edad_persona=5;

let resultado=edad_persona>18 ? "Puedes Ingresar" : "No puedes Ingresar";
/*if(edad_persona>18){
	"puedes ingresar"
}
else{
	"No puedes ingresar"
}*/


console.log(resultado);







