var valores = [true, 5, false, "hola", "adios", 2];
var mayor=0;
for (var i = 0; i < valores.length; i++) {
    if(valores[i] > valores[i+1]) mayor=valores[i]
    else mayor=valores[i+1];
}
console.log('el mayor es:'+mayor);
