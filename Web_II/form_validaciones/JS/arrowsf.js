// Funciones anónimas / flecha
// function suma(a,b){
//     return a + b;
// }
//
let suma = (a,b) => a+b;
let resta = function(a,b){return a - b}
// Generar una funcion que permita retornar
// el valor del subsidio(120000), solo si el salario es superior 
// a 1200000
let subsidio = (salario) => salario > 1200000 ? 120000 : 0;

// Callback: Es una función que es invocada por otra, es decir,
//pasar el control a otra función

function login(username, password, role,fncallback){
    fncallback(username, password,role)
}

function operacion(nro1, nro2, oper, callbackoperacion){
    callbackoperacion(nro1, nro2, oper);
}

function mensaje(){
    console.log("Bienvenidas los callbacks")
}
//Ejecutar la función saludar
//saludar(mensaje)
function parimpar(numero, fcall){
    fcall(numero)
}

function competencia(prom1, prom2, prom3, fncompet){
    fncompet(prom1, prom2, prom3);
}

//Generar una función que permita buscar un empleado
//indicando el número de identificación y retorne sus datos
function searchEmp(id, arrobjs){
    let mFind = arrobjs.find(emp =>emp.cedula == id);
    // Si encuentra el id
    if (mFind != undefined){
        return mFind
    }
    else{
        return {mensaje:"No hallado"}
    }  
}
//Con callback
function searchEmp1(id, array, fnCall){
    fnCall(id, array);
}