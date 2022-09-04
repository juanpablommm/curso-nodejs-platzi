/**si no controlamos con un try catch la funcion que pueda casuar el error si no una funcion 
 * de mas arriba que la este llamando seguiremos teniendo el mismo resultado, pus se estaremos
 * capturando el error para esta funcion y con el stack del error sucedido pordemos 
 * analizar las lineas donde ha a roto, en los llamados a que funciones y cual fue la que
 * se rompio, pues esto se va lazando en burbuja hacia arriba
 */
function otraFuncion() {
    serompe();
}



function serompe() {
    return 3 + z;
}

/**podemos hacer uso del try catch para controlar los posible errores
 * que podamos tener, funcionando casi con similitud al try catch de java
 * 
 * donde nosotros en node capturaremos el error con el catch de una menra muy general
 * y enviado por console.error el error, podiendo enviar el mesage solamente o el stack completo
 */

try {
    otraFuncion();
} catch (error) {
    console.error('vaya algo se ha roto');
    console.error(error);
    console.log('pero no pasa nada lo hemos capturado');
}

/**ejemplo de capturar el error con try-catch para codigo asyncrono 
 * 
 * para controlar errores en las funciones asincronas tenemos que recordar que esttos
 * procesos no estan sucediendo en el hilo principal de la aplicacion en el EventLoop
 * sino que por el contrario al ser procesos asincronos estos se estan ejecutando el eh
 * ThreadPool por lo que cuando uno de esttos se rompe y falla no tenemos forma de controlarlo 
 * dese el hilo principal de la aplicacion si no que debemo hacerlo en el mismo hilo para ese
 * procesos, es ahy donde debemos colocar el try-catch para controlar el posible errror que pueda
 * suceder
*/
function seromepAsincrona(callback) {
    setTimeout(() => {
        try {
            return 3 + z;
        } catch (error) {
            console.error('ha corrudi un error en la funcion asincrona');
            callback(error);
        }
    });
}

try {
    seromepAsincrona((error)=>{
        console.error(error.message);
    });
} catch (error) {
    console.error('paso un error en la funcion asincrona');
    console.error(error);
    console.log('lo capturamos');
}