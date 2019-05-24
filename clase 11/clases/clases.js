	class libro{
		constructor(nombre,categoria){
			this.nombre=nombre;
			this.categoria=categoria;
			//this.nombre_libro=nombre;
			//this.categoria_libro=categoria;
			//this.nombre=nombre;
			//this.categoria=categoria;
		}
		/*imprimir_titulo() {
			console.log(this.nombre);
		}
		categoria(){
			console.log(this.categoria);
		}*/
		grabarDatos(){
			let init={
				method:"POST",
				body:{nombre:this.nombre,categoria:this.categoria}
			}
			fetch(url,init)
		}

	}


class utiles{
	constructor(){

	}
	limpiarInput(){

	}
	formatoFecha(data){
		return data;
	}
}