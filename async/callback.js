/*cabe recordar que en javasCrip las funciones son elemntos de primer nivel
 por lo cual los puedo utilizar de cualquiera manera, como por ejemplo pasandolos 
 como paramtros, podemos psar una funcion como parametro a otra, y esto es lo que se le conoce
 como un callback*/

function hola(nombre, miCallback) {
    /*una de las maneras mas faciles de añadoir asincronia a todos nuestro procesos es simplement
    ejecutar un setTitmeout.
    es muy parecito al setInterva que utlizamos anteriormente
    donde le pasamos una funcion como prinmer argumento, y le pasamos un segundo parametro
    que es el intervalo de cuando se jecuta*/
    setTimeout(() => {
        console.log('hola, ' + nombre);
        miCallback();
    }, 5000);
    
}


function adios(nombre, myOtroCallback) {
    setTimeout(() => {
       console.log('adios, ' + nombre);
       myOtroCallback() 
    }, 1000);
}

console.log('iniciando proceso');
hola('juanpiss', (nombre)=>{
        adios(nombre, ()=>{
            console.log('terminado proceso');
        });
    }
);


/**si nostros no concemos cuanto puede tardar nuestra funcion asincrona es muy importanto
 * que definamos primero lo qu queremos que se jecute y lo siguiente despues de so, para poder
 * controlar y tener un comportamiento a lo que nosotros queramos
 * y es que asi es como funcionan los callbacks, mandamos una funcion como argumento a otra, y nosotros decidimos
 * cuando la jecutamos si depues de hacer x cosa o antes
 * 
 * por ejemplo si mandamora a ejcutar las dos funciones asincronas que tenmos, independientement de
 * cual se la que llamemos primero, la que en realidad se ejecuta primero sera la que demore menos
 * tiempo en responder
 */
/*hola('juampiss', function name(params) {  
});
adios('juampiss', function name(params) {  
});
*/