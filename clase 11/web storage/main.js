
validarBloqueo()

setInterval(()=>{
	validarBloqueo()
},1000)
/*
let validacion=new Promise((resolve,reject)=>{
		let min=localStorage.minuto_bloque;
	while(localStorage.bloqueado){
		let hora=new Date();

	let dif=hora.getMinutes()-min;
		if(dif>4){
			resolve()
		}
	}
	
	
})
.then(()=>{
		document.getElementById('modal-aviso').classList.add("hide-modal")
		localStorage.clear();
})*/

let btn_login=document.getElementById('btn-login');
let intentos=0;
btn_login.addEventListener("click",()=>{
	let usuario=document.getElementById('usuario').value;
	let password=document.getElementById('password').value;
	
	let estado_validacion=validar(usuario,password); // true or false
		if(estado_validacion){
				
		}
		else{
			
				intentos++;
				console.log(intentos);
				if(intentos==3){
				
					document.getElementById('modal-aviso').classList.remove("hide-modal")
					localStorage.bloqueado=true;
					let hora=new Date();
					localStorage.hora_bloque=hora.getHours();
					localStorage.minuto_bloque=hora.getMinutes();
				}
				
		}

})



function validar(usuario,password){
	let estado=false;
	//
	if(usuario=="admin" && password==123456){
		estado=true;
	}

	return estado;
}

function validarBloqueo(){
	let fecha_actual=new Date();
	let minuto_actual=fecha_actual.getMinutes();
	let hora_actual=fecha_actual.getHours();
	let dif=minuto_actual-localStorage.minuto_bloque;
	console.log(dif);
	if(dif>1){
		 localStorage.clear();
		document.getElementById('modal-aviso').classList.add("hide-modal")
	}
	else{
		if(localStorage.bloqueado){
			document.getElementById('modal-aviso').classList.remove("hide-modal")
		}
		else{
			document.getElementById('modal-aviso').classList.add("hide-modal")
		}
	}
	//console.log(localStorage.hora_bloque)
	//console.log(localStorage.minuto_bloque)
	
}