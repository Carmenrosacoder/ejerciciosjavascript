var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
dni=parseInt(prompt('Ingresar numero de DNI'));
letra=prompt('Ingrese letra:');
if(dni>0 && dni<99999999){
    for(var i=0; i<letras.length-1; i++){
        if(dni%23===i){
            console.log(letras[i]);
            if(letras[i]===letra.toUpperCase()) console.log('Coinciden');
            else console.log('La letra no es correcta');
        }
        }
}
else console.log('El número proporcionado no es válido');
