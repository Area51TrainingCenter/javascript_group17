import {Utilitario} from "./utilitario";

let obj=new Utilitario();
obj.imprimir("Mensaje enviado desde app.js");


let obj_carga=()=>{
    console.log("cargando desde la funcion");
}

obj_carga();