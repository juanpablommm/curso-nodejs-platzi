/**
 * para realizar la importacion de un modulo propio, al no estar dentro de core de node
 * o como modulo que hallamos instaldo, tendremos que colocar la ruta de donde esta el archivo
 * como tal, y dado que es un archivo js no tendremos que colar la extension
 */
const modulo = require('./modulo');

/**podemos tambien aplicar la desestructuracion en la importacion 
 * const {saludar, propiedad1} = require('./modulo');
 */

/**si lo que exportasemos desde el modulo solo fuese una funcion,
 * entonces ejecutamos el modulo como fi fuese una funcion*/
//modulo();

/**imprimimos la propiedad 1 que exportamos en el obejto json del modulo */
console.log(modulo.propiedad1);

/**mandamos a llamar al metodo de modulo que exportamos en el objeto json */
modulo.saludar();