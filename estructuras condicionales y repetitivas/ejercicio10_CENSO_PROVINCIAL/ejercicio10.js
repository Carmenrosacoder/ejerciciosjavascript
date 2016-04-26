/*Se realizó un censo provincial y se desea procesar la información obtenida en dicho censo.
 De cada una de las personas censadas se tiene la siguiente información: número de documento,
  edad y sexo ('femenino' o 'masculino') Se pide confeccionar un programa que lea los datos de cada persona censada
  (para finalizar ingresar el valor cero en el número de documento) e informar:

a) Cantidad total de personas censadas.
 b) Cantidad de varones. c) Cantidad de mujeres. d) Cantidad de varones cuya edad varía entre 16 y 65 años.*/
var cont=0;
var contf=0;
var contm=0;
var contme=0;
 do{
 dni=parseInt(prompt('Ingresar numero de documento:(para finalizar el programa ingresar 0)'));
 if(dni===0) console.log('El programa ha terminado')
 else{
 edad=parseInt(prompt('Ingresar edad:'));
 sexo=prompt('Sexo:(F) o (M)');
 switch (sexo) {
     case 'F':
         contf++;
         break;
    case 'M':
    if(edad>16 && edad<65){
        contme++;
    }
        contm++;
        break;
 }
cont++;}
 }while(dni!=0)
console.log('Cantidad de personas censadas:'+cont+'\n Cantidad de varones:'+contm+'\n Cantidad de mujeres:'+contf+'\n Cantidad de varones cuya edad varía entre 16 y 65 años:'+contme);
