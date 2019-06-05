class Usuario{
	constructor(){
	}

	validar(valor1,valor2){
		// llamar a la validacion;
		//console.log(user,password);
		
		//validar usuario
		//https://sminnova.com/restapitrujillo/login_clase/login
		// usuario // password
		let url="https://sminnova.com/restapitrujillo/login_clase/login";
		let formData=new FormData();
		formData.append("usuario",valor1);
		formData.append("password",valor2);
		let configuracion={
			method:"POST",
			body:formData
		}
		fetch(url,configuracion)
		.then((data)=>{return data.json()})
		.then((data)=>{

			console.log(data);
			if(data){
				window.location="listado.html";
				localStorage.usuario=valor1;
			}else{
				alert("datos ingresados de manera incorrecta");
			}
		})
		/*async function obtener(){
			let estado=	await fetch(url,configuracion)
			let dato= await estado.json().then((data)=>{return data})
			return dato;
		}
		 obtener(); */
		//console.log(obtener().then((data=>{console.log(data)})));

	}
}