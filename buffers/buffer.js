/**esta es la menara mas simple de trabajar con un buffer,
 * Mediante el metodo alloc, y el numero que le psaemos con parametro, estamos diciendo
 * cuantos espacios en memoria queremos que nos guarde, o reserve por asi decirlo,
 * manejandose en bytes, entonces manifestamos cuantos bytes queremos que nos guarde.
 * esto nos guarda el espacio en memroia mas nos nos guarda la informacion
 */
let buffer = Buffer.alloc(1);
console.log(buffer);

/**mdeiante el metodo from de buffer estamos guardando los bytes que necesitamos al mismo tiempo
 * que los estamos escribiendo
 */
console.log(Buffer.from([1, 2, 3]));
console.log(Buffer.from('hola'));

let abc = Buffer.alloc(26);
for (let i = 0; i < 26 ; i++){
    abc[i] = i + 97
}

console.log(abc.toString());