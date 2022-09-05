import moment from 'moment';

let fecha = moment();

/*podemos plicar el formato que queramos a la fecha que creamos con la
ayuda del metodo format*/
console.log(fecha.format('YYYY/MM/DD --- HH:mm:ss'));