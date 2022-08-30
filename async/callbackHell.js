 function hola(nombre, miCallback) {
    setTimeout(function (){
        console.log('hola, ' + nombre);
        miCallback();
    }, 5000);
    
}

function hablarname(callbackHablar) {
    setTimeout(function() {
        console.log('bla, bla, bla');
        callbackHablar();
    }, 1000);
    
}

function adios(nombre, myOtroCallback) {
    setTimeout(function(){
       console.log('adios, ' , nombre);
       myOtroCallback() 
    }, 1000);
}


// ---
/**de antenamos ya cuando enpezammos a tener muchos ecallbacks,
 * se empiza a avolver un codigo que no pinta de buen aspecto y ni facil entendieminento
 * por lo que lo correcto en vez de realizar ese llamdo asi como lo estamos realizando es tener
 * funciones intermedias que creen funcionalidades epescificas
 */

/*console.log('iniciando proceso');
hola('juanpiss', function(nombre){
    hablarname(()=>{
            hablarname(()=>{
                adios(nombre, ()=>{
                    console.log('terminando proceso');
                })
            })
    });
    }
);

*/

/**nos vamos a bsar de la recursividad, la recursividad es simplmente llamar a la misma 
 * funcion pero con informacion ligeramente distinta
 * 
 * para este caso aplicamos la recursividad, en una menara mas fail de resolver tantos llamados a calbbacks
 * con simplmente, la creacion de una funcion que recva el nombre, las veces en que se repitira y el callback
 * que ejecutaremos;
 * primero comparamos si las veces es mayor a 0, si es asi entonces llamamos a nuestra funcion asincrona
 * de hablar, donde al callback de esta le pasamremosel llamado nuevamente a nuestra funcion conversacion
 * para que se ejecute nuevamente con los mismo parametros pero con la diferencia que hacemos un pre-decremento
 * al pamatero veces para que valla dismunyendo el numero, cuando este llege a ceroentonces lo que hara
 * es dentrar al else donde simplmente ejecutara la funcion asincrona de adios, pasandole el nombre,
 * y el callaback que recibimos en nuestra funcion callback
 */
function conversacion(nombre, veces, callback) {
    if(veces > 0){
        hablarname(()=>{
            conversacion(nombre, --veces, callback)
       })
    } else{
        adios(nombre, callback);
    }
    
}

/**y el codigo quedara un poco mas limpio para ejecutrar al funcion hablar 3 numero de veces
 * sin tener que hacer tantos llamados a callbacks,
 * ahora lo que hacemos es llamar a nuestra funcion hola donde como callback le psamos la
 * funcion que creamos y el codigo sera mucho mas limpio
 */
console.log('iniciando proceso');
hola('carlos', (nombre)=>{
    conversacion(nombre, 3, ()=>{
        console.log('terminando proceso');
    })
});