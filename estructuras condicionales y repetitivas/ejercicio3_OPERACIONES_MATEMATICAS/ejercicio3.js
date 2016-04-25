a=parseInt(prompt('Ingresar primer numero:'));
b=parseInt(prompt('Ingresar segundo numero:'));
function operaciones(){
    if(a>b){
        suma=a+b;
        console.log('Suma:'+suma);
        resta=a-b;
        console.log('Resta:'+resta);
    }
    else if(a===b){
        alert('Los numeros son iguales');
    }
    else{
        producto=a*b;
        console.log('Producto:'+producto);
        division=b/a;
        console.log('Division'+division);
    }

}operaciones();
