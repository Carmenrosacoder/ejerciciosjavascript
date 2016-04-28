var a=parseInt(prompt('Ingresar primer número'))
var b= parseInt(prompt('Ingresar segundo numero'))
var operacion=prompt('Elige una operacion:Suma(s),Resta(r),multiplicacion(m),division(d)');
operacion=operacion.toUpperCase();
function operaciones(a,b){
    switch (operacion) {
        case 'S':
        var suma=a+b;
        console.log('suma:'+suma);
            break;
        case 'R':
        if(a>b) var resta=a-b;
        else resta=b-a;
           console.log('resta'+resta);
           break;
        case 'M':
         var producto=a*b;
         console.log('multiplicacion:'+producto);
         break;
        case 'D':
        var division=parseFloat(a/b);
        console.log('division:'+division);
        break;
    }
}operaciones(a,b);
