### CURSO DE NODE JS EN PLATZI

9. clase 9, ***analizanodo el uso de la consola para imprimir***
* console.log()
* console.info() => este es baciamente el mismo que console.log, pero con la diferencia ya cuando tengamos una palicacion un poco mas de negocio, y necesitemos guradar la infomracion que se muestra por consola, los logs, utlizaremos precisamente console.log, y el console.info solo para cuando queremos simplmente mostrar una informacion de como va el proceso, que codigo estamos ejecutando como para manternos informados, pero esto no seran guardados
* console.error() => para cuando tengamos un error que querramos mostrar por consola, y este se podra guardar entre los errores en los logs
* console.warn() => para cuando queramos mostrar un advertencia
* console.table() => esta es de gran utlidad dado que nos mostrara informacion en forma de tabla, ideal para cuando tengamos arreglos por ejemplo
* console.group() => este tambien es de gran utlidad dado que nos permitira agrupar los logs, de forma que cuando se muestra por consola , se vera un identado para cada grupo de logs, para este tenemos
que usar console.group('nombreGrupo') y los logs del grupo estaran dentro, y para finalizar el grupo de logs, tenemo que finalizar con console.groupEnd('mismoNombreGrupo') 