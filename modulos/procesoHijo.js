/**estamos aplicando las desestruturacion de un obejto de emacSript 6, 
 * para realizar la importancion,
 * perro de igual manera es como si aplicaramos
 * el const exec = requiere('child_process').exec
 */
const { exec, spawn } = require('child_process');


/**esto lo que nos va a permitir el exec, es ejeuctar basicamente cualquier comando 
 * en una terminal, donde pasamos dos parametros el primero el el comando a ejcutar
 * pasado como un string y el segundo es un callback el cual tendria 3 parametros el primero
 * es para el error en caso de que ocurra, el segundo para la salidad principal estadrar
 * stdout y el tercero es el staerr por si ha habido al gun tipo de error o algun tipo de
 * problama igualmente
 */
exec('dir', (err, stdout, sterr)=>{
    /**si ahy un error lo mandamos por un console.error y 
     * manamos un return false, cortando la ejecucion del demas codigo
     * que ahy hacia abajo
     */
    if (err) {
        console.error(err);
        return false;
    }
    /*si todo salio bien mostramos pr consola la salida estandar de la operacion
    ejecutada por consola, que en este caso es la realizacion de un dir para listar
    los elementos*/
    console.log(stdout);
})


/**ahora lo que haremos es que un proceso hijo esjecute un proceso de node,
 * el archivo de errores.js.
 * 
 * eso es muy importante, dado que por ejemplo si tenemos un codigo en otro lenguaje
 * que necesitemos sea x su funcionalidad y no lo queremos tener que psar a node, podemos
 * ejecutarlo con un proceso hijo
 */
exec('node modulos/errores.js', (err, stdout, sterr)=>{
    if (err) {
        console.error(err);
        return false;
    }
    console.log(stdout);
})


/**ahora cuando nosostros querempos ejecutar un proceso mas complejo que un exec, que ejcutar
 * un comando y ya esta...
 * tenemo que apoyarnos de spawn
 * 
 * ya no le podremos pasar varia tareas de ternial en el primer parametro, psa spawn pasamos
 * como primer parametro la primer comando en terminal que vallamos a ejuctar y si quermos
 * ejcutar mas comando seguidos debemos hacerlo con un sgundo parametro para spawn que seria 
 * un arreglo de string en el cual se le para los demas comandos, como por ejemplo
 * spawn('ls', ['-al'])
 * 
 * ya apartir de la realizacion del proceso esta realizada, pero no obtendremos ninguna 
 * salida para observa que lo ha realizado, pero podemos ingresar a consultar coasas
 * sobre ese proceso
 */
let proceso = spawn('node', ['modulos/errores.js']);
console.log(proceso.id);//imprimimos el id de ese proceso
console.log(proceso.connected);//imrprimos si ese proceso esta conectado

/**podemos decirle que nos muestre la salidad standar de eso proceso
cuando pase algo que es lo que nos interesa, con .on() y como parametro
lo que queremos ver como salida standar cuando pase ,
como por ejemplo que venga data,
esto recibe un seguno parametro un callback  */
proceso.stdout.on('data', (dato)=>{
    console.log('¿esta muerto?');
    console.log(proceso.killed);
    console.log(dato.toString());
});

/**podemos acceder a cuando le proceso termine por ejemplo  */
proceso.on('exit', ()=>{
    console.log('el proceso termino');
});
 