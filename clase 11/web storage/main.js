
validarBloqueo()

/*setInterval(()=>{
	validarBloqueo()
},1000)
*/
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
	
	let estado_validacion=validar(usuario,password); // true or false penidente
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



function validar(par_usuario,par_password){

	//https://sminnova.com/demo/login.php
	//usuarios
	//password
	let estado=false;
	//
	let url="https://sminnova.com/demo/login.php";
	let datos=new FormData();
	datos.append("usuario",par_usuario)
	datos.append("password",par_password);
	let init={
		method:"POST",
		body:datos
	}
	fetch(url,init)
	.then((data)=>{return data.json()})
	.then((data)=>{
		//console.log("aqui: "+data);
		if(data==false){

			intentos++
		}
		//console.log(data)
	});
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
	
	
}