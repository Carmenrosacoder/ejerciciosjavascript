/*Realizar un programa que permita crear un molde para objetos de tipo círculo al que le pasamos
el radio cuando lo inicialicemos, y que tenga una función que nos calcule su área, otra su longitud,
y estos valores sean mostrados por pantalla.*/
var circulo = {
    radio:null,
    area: function(radio){
        return (Math.PI*Math.pow(this.radio,2))
    },
    longitud: function(radio){
        return  (2*Math.PI*this.radio)
    }
}
circulo.radio = parseFloat(prompt('Ingresar radio del circulo:'));
alert('AREA:'+circulo.area().toFixed(2)+'LONGITUD:'+
circulo.longitud());

/*
function calcularArea(radio){
    this.radio=radio;
    this.area = function(){
        var area=Math.PI*Math.pow(this.radio,2);
        alert('Area del circulo:'+area);}
    this.longitud = function(){
        var longitud = 2*Math.PI*this.radio;
        alert('Longitud del circulo:'+longitud)
    }
}
var r=parseFloat(prompt('Ingrese radio del circulo:'));
var calcularArea= new calcularArea(r);
calcularArea.area();
calcularArea.longitud();
*/
