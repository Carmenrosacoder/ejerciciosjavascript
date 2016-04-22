a=parseInt(prompt('Ingresar coordenada 1:'));
b=parseInt(prompt('Ingresar coordenada 1:'));
c=parseInt(prompt('Ingresar coordenada 2:'));
d=parseInt(prompt('Ingresar coordenada 2:'));
function puntomedio(){
 x=((a+c)/2);
 y=((b+d)/2);
}
puntomedio();
alert('El punto medio del segmento de los puntos: ('+a+','+b+')  y  ('+c+','+d+') es: ('+x+','+y+')');
