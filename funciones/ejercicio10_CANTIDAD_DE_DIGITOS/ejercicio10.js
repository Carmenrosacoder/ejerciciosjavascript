var cont=0;
n=parseInt(prompt('Ingresar numero:'));
function digitos(n){
    do{
     n=n/10;
    cont++;
    }while(n>=10);
console.log('Numero de digitos:'+(cont+1));}digitos(n);
