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
		
		this._listado=[];
	}

	static seleccionado(ind)
	{
		return this._listado[ind];
	}

	agregarContacto(nombre,apellido,dni,telefono,usuario="12312312"){
		this._obj=Object.create({
			nombre:"",
			apellido:"",
			dni:"",
			telefono:"",
			usuario:""
		});
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

	listadoHtml(){
		let temp="";
		for(let item of this._listado){
			temp=temp+`<li onclick="verdatalle(${item.dni})">${item.nombre} ${item.apellido}</li>`;
		}
		return temp;
	}

}

