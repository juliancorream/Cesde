/*
function subsidio(salario){
    return salario <= 2000000 ? 120000 : 0;
}
*/

//funcion flecha
let subsidio = (salario) => salario > 2000000 ? 0 : 120000;

//funcion anonima
//let subsidio = function(salario){ return salario > 2000000 ? 0 : 120000;}


//CallBack:  es una funcion que es invocada por otra, es decir, pasar el control  otra funcion.

//funcion de nivel superior

function login (username, password, role, fncallback){
    fncallback(username, password, role)
}

function mensaje(){
    console.log("Bienvenidos los callback")
}

function operacion(nro1, nro2, oper, callbackoperacion){
    callbackoperacion(nro1, nro2, oper);
}


function parimpar(numero,fcall){
    fcall(numero)
}


function competencia (prom1, prom2, prom3, fncompet){
    fncompet(prom1, prom2, prom3);
}




// generar una funcion que permita buscar un empleado indicando el numero de identificacion y retorne sus datos
//funcion Normal
function searchEmp (id, arrobjs){
    let mFind = arrobjs.find(emp => emp.cedula == id);
    //si encuentra ek ID 
    if (mFind != undefined){
        return mFind
    }else{
        return {mensaje: "Id de Persona no existe"};
    }
}


//la misma fincion de busqueda pero con callback

function searchEmp1(id, array, fnCall){
    fnCall(id, array);
}



