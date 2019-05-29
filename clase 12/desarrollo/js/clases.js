class Contacto{
	/*constructor(nombre,apellido,dni,telefono,usuario="12312312"){
		this._nombre=nombre;
		this._apellido=apellido;
		this._dni=dni;
		this._telefono=telefono;
		this._usuario=usuario;
		this._listado=[];
	}*/
	constructor(){
		this._obj={
			nombre:"",
			apellido:"",
			dni:"",
			telefono:"",
			usuario:""
		}
		this._listado=[];
	}

	agregarContacto(nombre,apellido,dni,telefono,usuario="12312312"){
		this._obj.nombre=nombre;
		this._obj.apellido=apellido;
		this._obj.dni=dni;
		this._obj.telefono=telefono;
		this._obj.usuario=usuario;
		this._listado.push(this._obj);
		console.log(this._listado);
	}

	mostarContacto(){
		console.log(this._nombre);
		console.log(this._apellido)
	}

}

