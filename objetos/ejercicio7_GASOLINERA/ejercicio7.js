
var gasolinera={
    litros: 200,
    precio:7,
    litrosRetira:null,

    dispensa: function(){
if(this.litrosRetira<=this.litros){
    this.litros -= this.litrosRetira;
    return this.precio*this.litrosRetira;
}
else if(this.litrosRetira>=this.litros){
  return this.litros+"litros";

}
else{
    return "El numero de litros disponible es:"+this.litros;
}
    }
}
alert('Dispensador con '+gasolinera.litros+' litros\n Precio:'+gasolinera.precio+'soles');
do{
gasolinera.litrosRetira=parseInt(prompt('¿Cuantos litros retirará?: '));
alert('Debe pagar'+gasolinera.dispensa()+'soles\n'+'Solo quedan'+gasolinera.litros+'litros');
}while(gasolinera.litros>0);
alert('Se acabo la gasolina');
