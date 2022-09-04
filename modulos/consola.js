console.log('Algo');
console.info('info')
console.error('error');
console.warn('warning')

var table = [
    {
        a: 1,
        b: 'z',
        c: 'd'
    },

    {
        a: 2,
        b: 'Otra',
    }
]
console.table(table);
console.group('conversacion')
console.log('hola como estas?');
console.log('blablabla');
console.log('blablabla');
console.log('blablabla');
console.log('adios');
console.groupEnd('conversacion')
console.log('se acabo la conversacion');