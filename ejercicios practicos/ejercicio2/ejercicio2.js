

var cantidad=Number(prompt('Ingresar cantidad de datos:'));
var cont=null;
var cont2=null;
function igualomenor(){
for(var i=0; i<cantidad; i++){
    numero=Number(prompt('Ingresar número'));
    if(numero<=0){
        cont++;
    }
    else{
        cont2++;
    }
}
console.log('cantidad de números menores o iguales a 0: '+cont);
console.log('cantidad de numeros mayores a 0: '+cont2);
}
igualomenor();
