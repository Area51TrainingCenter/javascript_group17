let nombre="Juan Carlos";
console.log(nombre);

let validar=()=>{
    console.log("hola");
}

let apellido="RT";
const edad=20;

let calcular=(...datos)=>{
    for(let item of datos){
        console.log(item);
    }
}

let consulta=new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("Termino la promesa");
    },3000)
   
})
.then((data)=>{
    console.log(data)
})


let [dato1,dato2]=[2,3]
console.log(dato1)