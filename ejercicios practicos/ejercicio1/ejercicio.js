function promedio(){
var suma=0;
var i=0;
numeroDePersonas=Number(prompt('Ingresar número de personas:'));
do{
i++;
estatura=Number(prompt('Ingresar estatura'));
suma+=estatura;

}while(i<numeroDePersonas);

promedio=suma/numeroDePersonas;
console.log('promedio:'+promedio);
}
promedio();
