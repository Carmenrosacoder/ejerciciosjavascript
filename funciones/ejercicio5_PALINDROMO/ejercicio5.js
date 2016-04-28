
var mensaje = prompt('Ingresar una cadena:')
mensaje= mensaje.split(' ').join('');
function CadenaPalindrom(palindrome)
{
var longitud = mensaje.length
    for( var i =0; i<longitud; i++ )
    {
        if (mensaje.charAt(i) === mensaje.charAt(longitud - 1 - i)) console.log('Es palindrome.');
        else console.log('No es palindrome');
    }
}
CadenaPalindrom(mensaje);
