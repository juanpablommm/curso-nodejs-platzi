/**si tenemos funciones que son promesas lo unico que tenemos que hacer es
 * escribir la palbra asyn antes de la funcion, de esta forma esta comvirtiendo la funcion
 * asyncrona declarandola como tal. y podemos enpezar a tulizarla con el await,
 * pero tenemos que tener en cuenta que para hacer uso de este solo seria valido dentro de una
 * funcion ayncrona declarada, es decir que contenga la palabra asyn
 */
function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function (){
            console.log('hola, ' + nombre);
            resolve(nombre);
        }, 5000);
    });
    
}


async function hablarname(nombre) {
    return new Promise((resolve, reject)=>{
        setTimeout(function() {
            console.log('bla, bla, bla');
            //reject('Hay un Error');
            resolve();
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

async function main() {

    /**cbae lo mencionado el para el uso de await tiene que ser deontro de una funciono
     * declarada como asyncrona.
     * el await al igual que como se envio antes con el uso de promersa en el .then()
     * podremos permitirnos esérar a que se ejecute primero una funcion asyncrona antes de
     * la otra pero de una forma mas limpia,
     * con await estamos eesperando a que se jecute una funcion asyncrona antes de ejecutar
     * la otra, basicamente como vinos antes es la manera de ejecutar codigo asyncrono de manera
     * syncrona visualmente hablando.
     * 
     * ahora si queremos que dos procesos se ejcuten de manera simultanea por detras podemos quitarle 
     * el await y estos se ejcutran simultanemante por detras de manera simultanea
     * independientemente lo que tarde cada tarea
     */
    let nombre = await hola('carlos');
    await hablarname();
    await hablarname();
    await adios(nombre);
    console.log('termina el proceso');
}

/**dado que la funcionj maain esta declara como asincrona al ejecutar este codigo no obtendremos
 * un representacion syncrona, pueso que primero se ejecutara el log de empezamos, depues
 * el , log de segunda instrucccion y demas codifgo sincrono que halla debajo, mientras que la funcion
 * main se estara ajecutando en segundo plano en el Thread pool y se demorara lo que tena que demorarse
 * segun la compejidad de la tarea, sin afectar el hilo del EventLoop, cuando alla sido resolvida esa tarea pues
 * se mostrara en la consola dado este caso en particular
 */
console.log('empcezamos el proceso');
main();
console.log('esta es la segunda instruccion que se ejecuta');