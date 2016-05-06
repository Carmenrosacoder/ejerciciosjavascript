/*Un teléfono celular cuenta con una funcionalidad de identificación de llamadas permitiendo no solo ver qué número nos intenta contactar sino también conocer qué contacto dado de alta en nuestro dispositivo, nos llama.

Realizar un programa que imite esta funcionalidad, principalmente que el usuario al ingresar el número de teléfono, el programa reconozca a quien pertenece el mismo*/
var n=parseInt(prompt('Cuantos contactos guardara?'));
var contactos = []
for (var i = 0; i <n; i++) {
    var persona ={}
    persona.numero=parseInt(prompt('Ingrese numero de telefono:'));
    persona.nombre=prompt('Ingrese el nombre del contacto');
    contactos.push(persona);
}
var longitud=contactos.length;
var telefono=parseInt(prompt('Ingrese un numero de telefono:'));
for(j=0;j<longitud;j++){
if(telefono===contactos[j].numero){
    alert('contacto es:'+contactos[j].nombre)
}
}
