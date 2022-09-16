/**cabe recordar que los calbbacks no son mas que finciones que se pasan como argumentos
 * a otras funciones, para ser ejecutadas en cuando se ejcute otra cosa antes o despues,
 * por lo qeu los callbacks simplemnte son funcines que al psarlas como argumentos a troa funciones,
 * nosotros dentro de la funcion que la recibe como paramtreo decidimos cuando las mandamos a llamar,
 * ejecutandose despues de que ocurra x cosa dentrode mi funcion, o de manera no srcuencial, logrando
 * asi el asincronismo
 */
function asincrona(callback) {
    setTimeout(() => {
        try {
            let a = 3 + z;
            /**vamos a suponer que todo ha ido bien, y en el caso de que asi sea,
             * entonces tomando el patron error firts callback, deberiamos colcar como
             * primer parametro al callback el error, en este caso hiria nulo pues dado que 
             * ha salido bien nuestra operacion si asi fuese
             */
            callback(null, a);
        } catch (e) {
            /**en el caso de que surja un error entonces lo que debemos realizar el mismo procedimiento
             * al aplicar el patron error firts callback, el primer parametro que mandamos hacia nuestro 
             * callback seria el error, que en este caso ya no seria nulo, sino que habria un error que ya
             * se ha generado al captruarse por el catch, en el resto de parametros poemos o no por nada, y en
             * el caso de que se recojan bendran por defecto un undefined o podemos colocar que por defecto 
             * venga un null, independiente de nuestro diseño, si nos combiene que venga un tipo null o no
             */
            callback(e);   
        }
    }, 1000);
}


/**lalamos a nuesra fucion asincrona, y le psamos nuestro callbacl, en este caso
 * esta llevara dos paramtros , el error, en primer logurar, segun el patron error first callbacks,
 * y el segundo segun lo que implementamos, seria la data.
 * validamos que el error este presente, siendo asi samos que algo ha ido mal y tenemos
 * un error que fu pasado como parametro al nuestro callback desde la funcion asincrona,
 * y en caso de que el que no este presente el error, entonces sabremos que todo ha ido 
 * bien y tenemos la data con iformacion.}
 * 
 * ahora una vez tenemos  el error pues definimos que podemos hacer, por ejemplo en caso de que
 * se pueda solucionar sobre la marcha pues se soluciona, en caso de que no pues bloqueriamos toda la
 * ejecucion, por ejemplo, en este caso mandamos un mensaje de error, y mostramos todos el stack del error,
 * la exepcion que se capturo y una de las buenas practicas como se hablo es para la ejcucion de la funcion,
 * por ejemplo en este caso de retornarmos un false para que se pare el resto de la funcion
 */
asincrona((error, data)=>{
    if(error){
        console.error('tenmos un error ');
        console.error(error);
        // throw error; NO SE RECOMIENDA, NO VA A FUNCIONAR
        return false; //formar correcta 
    }
    console.log('todo ha ido bien mi data es ' + data);
});


/**le patron erro firts callback es el que tenemos que manejar con funciones asncronas,
 * si intentamos capturar el error de la funcion asincrona para relanzarlos, no podremos,
 * pues el llamado a la funcion que se le pasa por agrumento es decir el callback, esta sucediento
 * en otro hillo, por lo que podremos cojer el eror de la funcion externa en este caso, pero no el 
 * de su calbback por que esta funcionando en otro hilo.
 * 
 * lo correcto es implmentar el patron error first callback, y para la ejecucion con un return false 
 * en el callback, y simplemente si ha ocurrido un error para el callback, ya lo habremos psamod como
 * arguemento a el paramtro error dentro de la funcion que recibe esta callback, por lo que solo compararemos
 * si el error esta presente pues mandamos un mensaje de error y procederemos en consecuencia o si no pues
 * sabremos que todo ha ido bien y tendremos la data disponible
 */
// try {
//     asincrona((error, data)=>{
//         if(error){
//             console.error('tenmos un error ');
//             console.error(error);
//             throw error;
//             //return false;
//         }
//         console.log('todo ha ido bien mi data es ' + data);
//     });
// } catch (error) {
//     console.error('hemos capturado un error');
// }