
var condition = true;
do{
    var dividendo = parseInt(prompt('ingrese dividendo'));
    var divisor = parseInt(prompt('Ingrese divisor'));
    if(isNaN(divisor))
    {alert('Ingrese numero correcto:');
     condition = true;
 }
 else{
     var cociente = dividendo/divisor;
     document.write(cociente);
     condition=false;
 }
}while(condition);
