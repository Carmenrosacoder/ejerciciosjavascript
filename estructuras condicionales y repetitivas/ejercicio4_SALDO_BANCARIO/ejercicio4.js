/* De cada cuenta corriente se conoce:
 número de cuenta,nombre del cliente y saldo actual. El ingreso de datos debe finalizar al ingresar un valor negativo en el número de cuenta.
a) De cada cuenta: número de cuenta, nombre del cliente y estado de la cuenta según su saldo, sabiendo que:
Estado de la cuenta:
'Acreedor' si el saldo es >0. 'Deudor' si el saldo es <0. 'Nulo' si el saldo es =0.
b) La suma total de los saldos acreedores.*/
numeroCuenta=parseInt(prompt('Ingresar numero de cuenta:'));
while(numeroCuenta>0){

nombreCliente=prompt('Ingresar nombre del cliente:');
saldo=prompt('Ingresar saldo');
if(saldo>0){
    console.log('Acreedor');
}
else if(saldo===0){
    console.log('Nulo');
}
else{
    console.log('Deudor');
}
}
