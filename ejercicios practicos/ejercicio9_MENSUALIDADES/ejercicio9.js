pago=5;
suma=0;
function mensualidad(){
for(var i=1;i<=20;i++){
    pago=pago*2;
    suma+=pago;
    document.write('El mes'+i+'pago:'+pago+'<br>');
}}mensualidad();
document.write('Total de 20meses:'+suma);
