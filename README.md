### CURSO DE NODE JS EN PLATZI

4. clase 4, **callbackHell soluccion con recursividad**, los callback se pueden desconrotrolar
si no definimos una tecnica para que esto no pase, se peude descontrolar por competo nuestro 
asincronismo y llegar hacer codigo spagueti, pero unq manera en lo que lo podemos evitar es utlizando
la recursividad para hacer el llamado a nuestras funciones asincronicas y saber como manejar
los callback, en donde ode mos definri cuantas veces necestiamos que se ejecute una funcion asincronica y
e callback que esta tendra entre cotras coas... tenemos que tener en cuenta que todo el codigo que temgamos escrito y queremos volver a tulizar debe de estar en una funcion


***esto es lo que queremos evitar, tener demasidos callback, anidando y anidando***
````js
hola('juanpiss', function(nombre){
    hablarname(()=>{
            hablarname(()=>{
                adios(nombre, ()=>{
                    console.log('terminando proceso');
                })
            })
    });
    }
);
````

***si empleamos la recursividad en una funcion tenemos un codigo mas efeciiente y que se ejutara x numero e veces***
````js
function conversacion(nombre, veces, callback) {
    if(veces > 0){
        hablarname(()=>{
            conversacion(nombre, --veces, callback)
       })
    } else{
        adios(nombre, callback);
    }
}
````