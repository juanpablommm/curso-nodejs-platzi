/*lo que vamos hacer es que nuestras funciones en ligar de ejecutar cosas cuando sean...
devulevan la prromesa y quien las llame pudea tener la promesa y estar penddiente de lo que pasa
del estado y todo eso.

reslizamos un returno de un new Promise donde esta tambien recibe un callback 
que seria un funcion que recibe una funcion con dos parametros, resolve, y reject,
los cuales nos van a permitir resolver la promesa en caso de que todo valla bien o rechazarla
en cazo de que ocurra un error y no permitir que siga a delante.

ya en nuestra funcion que teniamos anteriormente ya no estamos recibien dun callback
y tampoco los estamos jecutando, simplemente hacemos resolve() y esto ejucura resolvera
nuestro callback*/

function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function (){
            console.log('hola, ' + nombre);
            resolve(nombre);
        }, 5000);
    });
    
}

function hablarname(nombre) {
    return new Promise((resolve, reject)=>{
        setTimeout(function() {
            console.log('bla, bla, bla');
            // resolve(nombre);
            /*que pasa si en lugar de resolverse falla la promesa.
            esto nos obligara a controlarla con un cathc para cuando hagmos su llamado*/
            reject('Hay un Error');
        }, 1000);
    });
    
}

function adios(nombre) {
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
        console.log('adios, ' , nombre);
        resolve();
        }, 1000);
    });
}

// function conversacion(nombre, veces, callback) {
//     if(veces > 0){
//         hablarname(()=>{
//             conversacion(nombre, --veces, callback)
//        })
//     } else{
//         adios(nombre, callback);
//     }
// }


/**ahora que simplmente llamemos a nuestra funcion  asincrona, la llamamos
 * pasamos su parametro nombre, y el callback ya no va como paremtro, simplmente 
 * utlizamos la then() y es a este el que le paramiamos el callback que se jecutaria
 * 
 * una de las principales ventajas cuando utlizamos promesas es que las podemos ir anidando.
 * por ejemplo estamos llamando la funcion asincrona de hola, esta recibe como paraemtro un nombre
 * ejecuta internamente el setTimeout que tiene y mediante la promesa resulve para el callback que reciba
 * que en este caso lo estamos anidando con el llamado a la funcion adios, donde simplmente tenemos que pasarle
 * el nombre de la funcion y con esto vastara ya que la estamos resolviendo en la funcion hola
 * y ahy se mensiona que resibira un parametro llamado nombre por lo que no tenemos que indicarle 
 * en este lado que lo reciba y de igual manera concatenamos para que se ejecute el callback que
 * del final, que dice terminado proceso esete se estaria ejcutando dentro de la funcion adios mediante
 * la promesas
 * 
 * esto es una manera en al que podemos ver coodigo asincrono,  a un visualizacion  */
console.log('iniciando proceso');
hola('juampis')
    .then(hablarname)
    .then(hablarname)
    .then(hablarname)
    .then(adios)
    .then(()=>{
        console.log('terminado el proceso');
    })
    /**realizamos un catch para controlar el posible error que pueda suceder el alguna de las
     * promesas, en este caso pude orcurrir en algun llamado estas funciones asincronas que tenemos
     * en las cuales tulizamos las promesas.
     * nos aseguramos de controlar el error con un cathc y lo que hcamos es pasar un callback para
     * imprimir el mesaje de que ha ocurrido un error y para mosgtrarlo por consola a ver de que se trata
     */
    .catch(error =>{
        console.error('ha habido un error');
        console.error(error);
    });