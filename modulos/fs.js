/*para la importacion de modulos exiten varias maneras de realizarlo, pero 
la principal y la que se sigue utlizando hasta hora es la require.
donde crearemos una constante para usar el modulo y le asinaremos el modulo mediante la
importacion de est con el susro de require y el nombre del modulo como parametro.

otra opcion para l aimportacion es import { readFileSync } from 'fs'*/

const fs = require('fs');

/**todo lo que vallamos hacer con fileSystem se va a relizar de forma asyncrona dado que totos
 * estos procesos largos se realizan de forma asyncrona, y teniendo en cuenta el 
 * contexto de EventQueue, EvenTLoop y el ThreadPool.
 * 
 * aunque todos los metodos tuene un arternativa sincrona pero no es muy recomndable para tareas que puedan
 * ser muy largas, dado que estariamos bloquando el proceso principal y ahasta que esa tarea no sea completada,
 * no podremos seguira adelante con los demas procesos
 *
 * como por ejemplo si tenemos un servidor donde vamos a subir una foto y queremos guardala, pero si lo hacemos
 * sincrono durante el tiempo que estemos guardando ese archivo el servidor no va estar respondiendo peticions
 * por lo que estara bloqueado*/


/**creamos una funcion leer la cual recibe dos parametros la ruta del archivo y un callback,
 * y dentro de esta vamos a llamar la funcion readFile del fileSystem, esta es asyncrona, pero
 * tambien esta su funcion sincrona correspondiente a la mismoa la cual es readFileSync}
 * el readFile recibe como parametro la ruta, la codificacion del archivo, si es  por ejemplo UTF-8 
 * para cuando obtengamos la data no la obtengamos con un buffear sino la lectura del archivo correctamente,
 * ahora este parametro podemos perfectamente no colocarlo, pero esto ahra que nos devulva un buffear 
 * en la lectura del archivo. y un callback, en el cual va a venir un error, y un data,
 * el error sera por si ahy algun problema en la lectura del archivo nosotros sabremos como reacionar,
 * tirar una excepcion o un log de error o algo mas si el error esta presente, y si la data esta presente
 * pues es precisamente la que estaremos adquiriendo
 */
function leer(ruta) {
    fs.readFile(ruta, 'UTF-8', (error, data)=>{
        //erorr
        if(error){
            console.error('ocurrrio un error: ', error);
        }else {
            /*para la data si la obtenemos en un buffear podemos aplicar una conversion rapida del 
            buffear hacia un strijg tulizando el metodo toString() y obtendremos la informacion */
            console.log('lectura:  ',data);
        }
    })
}


function escribir(ruta, contenido) {
    /**con writeFile escribimos un archivo, el cual recibe como parametro
     * la ruta, el contenido y un callback el cual tendra un error en caso 
     * de que ocurrra un error
     */
    fs.writeFile(ruta, contenido, (error)=>{
        if (error) {
            console.error('no he podido escribirlo');
        }else{
            console.log('se ha escrito el archivo');
        }
    });
    
}


function borrar(ruta) {
    /**para bprrar nos apoyamos del metodo unlink, el cual recibe como parametro
     * la ruta del archivo y un callback con un parametro error para saber si ha habido un
     * error o no
     */
    fs.unlink(ruta, (error)=>{
        if (error) {
            console.error('ha ocurrdio un error: ', error);
        }else {
            console.log('se ha borrado el archivo');
        }
    });
    
}

    escribir(__dirname +'/archivo.txt', 'soy un archivo nuevo');
//    leer(__dirname + '/archivo.txt');
  //  borrar(__dirname + '/archivo.txt');
