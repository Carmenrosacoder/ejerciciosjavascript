a=parseInt(prompt('Ingrese primer número de vector 1:'));
b=parseInt(prompt('Ingrese segundo número de vector 1:'));
c=parseInt(prompt('Ingrese tercer número de vector 2:'));
d=parseInt(prompt('Ingrese cuarto número de vector 2:'));
function porductoescalar(){
    return ((a*c) + (b*d));
}
console.log('el producto escalar de los vectores '+'('+a+','+b+') y ('+c+','+d+') es:' + ((a*c) + (b*d)));
porductoescalar();
