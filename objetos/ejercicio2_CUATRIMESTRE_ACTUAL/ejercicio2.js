var meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","setiembre","octubre","noviembre","diciembre"]
meses= meses.length;
function cuatrimestre(mes){
    this.mes=mes;
    this.mesactual = function(){
        for(i=0;i<meses;i++){
        if(mes<=4||i<=3) alert('Cuatrimestre 1')
        else if(mes>4&&mes<=8) alert('Cuatrimestre 2')
        else alert('Cuatrimestre 3')}
    }
}
n=parseInt(prompt('Ingrese el #de mes'));
var cuatrimestre= new cuatrimestre(n);
alert(cuatrimestre.mesactual());

/*
function factura(precio,cantidad){
    this.precio = precio;
    this.cantidad = cantidad;
    this.importeTotal= function(){
        return this.precio*this.cantidad;
    };
}
var factura = new factura(20,100);
alert(factura.importeTotal());
*/
