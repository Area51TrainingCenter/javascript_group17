class Contacto{
	constructor(nombre,apellido,dni,telefono,usuario="12312312"){
		this._nombre=nombre;
		this._apellido=apellido;
		this._dni=dni;
		this._telefono=telefono;
		this._usuario=usuario;
		
	}

	agregarContacto(){

	}
	mostarContacto(){
		console.log(this._nombre);
		console.log(this._apellido)
	}

}

