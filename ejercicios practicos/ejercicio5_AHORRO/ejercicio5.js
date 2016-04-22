var total=0;
function ahorro(){

    for(var i=1; i<13;i++){
    deposito=Number(prompt('Ingresa deposito del mes '+i+':'));
    total=total+deposito;
    console.log('Mes'+i+' lleva ahorrado:'+total);
}
}ahorro();
console.log('El ahorro en un año es:'+total);
