function saludar() {
    console.log('hola mundo');
}

/**para poder llevar la informacion del modulo a otro, es decir para poder importarlo
 * desde otro modulo, es necesario que los exportemos para poder realizar la importacion.
 * de lo contrario solo llevaremos un objeto vacio.
 * para ello tendremos que colocar la palbra module, porque estamos en modulo 
 * y utlizar .exports = a lo que queremos exportar del modulo, sea una funcion o una proppieda
 * o imclusive como un obejto JSON
 */

//module.exports = saludar;


/**podemos no solo exportar un metodo, sino tambien un obejto JSON completo,
 * por lo que ene el enviamos la funcion saludar que tenemos en nuestro modulo y tambien
 * una propiedad que emos creado para ese obejto json que estamos exportando
 */
module.exports = {
    saludar,
    propiedad1: 'hola soy la propiedad 1',
}
