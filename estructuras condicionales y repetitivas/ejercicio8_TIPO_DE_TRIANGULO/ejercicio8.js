a=parseInt(prompt('Ingresar lado del triangulo'));
b=parseInt(prompt('Ingresar lado del triangulo'));
c=parseInt(prompt('Ingresar lado del triangulo'));
function triangulos(){
    if(a===b && a===c){
    console.log('Es un triangulo equilatero');
}
else if(a===b || b===c || a===c){
    console.log('Es un triangulo isosceles');
}
else if(a!=b && b!=c && a!=c){
    console.log('Es un triangulo escaleno');
    if(a*a===b*b+c*c || b*b===a*a+c*c || c*c===a*a+b*b){
        console.log('Es un triangulo rectangulo');
    }
}
}triangulos();
