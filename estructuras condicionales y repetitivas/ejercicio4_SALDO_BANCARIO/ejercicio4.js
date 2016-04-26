/* De cada cuenta corriente se conoce:
 número de cuenta,nombre del cliente y saldo actual. El ingreso de datos debe finalizar al ingresar un valor negativo en el número de cuenta.
a) De cada cuenta: número de cuenta, nombre del cliente y estado de la cuenta según su saldo, sabiendo que:
Estado de la cuenta:
'Acreedor' si el saldo es >0. 'Deudor' si el saldo es <0. 'Nulo' si el saldo es =0.
b) La suma total de los saldos acreedores.*/

var suma=0;
do{
numeroCuenta=parseInt(prompt('Ingresar numero de cuenta de 5 digitos(para detner el programa ingresar un valor negativo):'));
if(numeroCuenta<0) alert('El programa ha terminado');
else{
nombreCliente=prompt('Ingresar nombre del cliente:');
saldo=parseInt(prompt('Ingresar saldo'));
if(saldo>0){
    console.log('Numero de cuenta:'+numeroCuenta+'\n Nombre del cliente:'+nombreCliente+'\n Saldo:'+saldo+'\n Estado de la cuenta:Acreedor');
    suma+=saldo;
}
else if(saldo===0) console.log('Numero de cuenta:'+numeroCuenta+'\n Nombre del cliente:'+nombreCliente+'\n Saldo:'+saldo+'\n Estado de la cuenta:Nulo');
else console.log('Numero de cuenta:'+numeroCuenta+'\n Nombre del cliente:'+nombreCliente+'\n Saldo:'+saldo+'\n Estado de la cuenta:Deudor');}
}while(numeroCuenta>0);
console.log('la suma de los saldos acreedores es:'+suma);
