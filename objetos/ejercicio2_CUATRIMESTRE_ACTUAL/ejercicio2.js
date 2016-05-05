/*var meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","setiembre","octubre","noviembre","diciembre"];
var longitud=meses.length;
function cuatrimestre(n){
    this.n=n;
    this.mesactual = function(){
        for(i=0;i<longitud;i++){
        if(meses[i]===n && i<4) alert('Cuatrimestre 1')
        else if(meses[i]===n && (i>=4 && i<8)) alert('Cuatrimestre 2')
        else if(meses[i]===n && i>=8) alert('Cuatrimestre 3')}
    };
}
var n=prompt('Ingrese el mes actual').toLowerCase();;
var cuatrimestre= new cuatrimestre(n);
alert(cuatrimestre.mesactual());*/

var meses = [{
    mes: "enero",
    nro: 1,
    cuatrimestre: 1
},{
    mes: "febrero",
    nro: 2,
    cuatrimestre: 1
},{
    mes: "marzo",
    nro: 3,
    cuatrimestre: 1
},{
    mes: "abril",
    nro: 4,
    cuatrimestre: 1
},{
    mes: "mayo",
    nro: 5,
    cuatrimestre: 2
},{
    mes: "junio",
    nro: 6,
    cuatrimestre: 2
},{
    mes: "julio",
    nro: 7,
    cuatrimestre: 2
},{
    mes: "agosto",
    nro: 8,
    cuatrimestre: 2
},{
    mes: "setiembre",
    nro: 9,
    cuatrimestre: 3
},{
    mes: "octubre",
    nro: 10,
    cuatrimestre: 3
},{
    mes: "noviembre",
    nro: 11,
    cuatrimestre: 3
},{
    mes: "diciembre",
    nro: 12,
    cuatrimestre: 3
}
]

var ingreseMes=parseInt(prompt('Opciones:\n 1-Enero \n 2-Febrero \n 3-Marzo \n 4-Abril \n 5-Mayo \n 6-Junio \n 7-Julio\n 8-Agosto\n 9-Setiembre\n 10-Octubre\n 11-Noviembre\n 12-Diciembre'));
var longitud=meses.length;
for(i=0;i<longitud;i++){
if(ingreseMes===meses[i].nro){
    alert('cuatrimestre:'+meses[i].cuatrimestre)
}
}
