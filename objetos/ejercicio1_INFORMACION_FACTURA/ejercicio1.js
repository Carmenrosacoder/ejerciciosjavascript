/*Definir la estructura de un objeto que almacena una factura. Las facturas están formadas por la información de la propia empresa
(nombre de la empresa, dirección, teléfono, NIF), la información del cliente (similar a la de la empresa), una lista de elementos
(cada uno de los cuales dispone de descripción, precio, cantidad) y otra información básica de la factura (importe total, tipo de iva,
 forma de pago).
Una vez definidas las propiedades del objeto, añadir un método que calcule el importe total de la factura y actualice el valor de la propiedad correspondiente. Por último, añadir otro método que muestre por pantalla el importe total de la factura.*/
/*
function factura(precio,cantidad){
    this.precio = precio;
    this.cantidad = cantidad;
    this.importe = 0;
    this.importeTotal= function(){
        this.importe = this.precio*this.cantidad;
    };
    this.pantalla = function(){ alert('El importe total:'+this.precio*this.cantidad)};
}
var precio=parseFloat(prompt('Ingrese precio:'));
var cantidad=parseFloat(prompt('Ingrese cantidad:'))
var factura = new factura(precio,cantidad);
factura.importeTotal();
factura.pantalla();
*/
var factura ={
    nombreEmpresa:"Laboratoria",
    direccion:"Av-Pardo",
    telefono:555555,
    nif:"hh",
    informacionfactura: function(nombreEmpresa,direccion,telefono,nif){
        return ('Nombre de la Empresa:'+this.nombreEmpresa+'\n'+'Dirección:'+this.direccion+'\n'+'Telefono:'+this.telefono+'\n'+'NIF:'+this.nif)
    },
}
var producto= {
    descripcion:"Laptops Toshiba",
    precio:3500,
    cantidad:10,
    infoProducto: function(descripcion,cantidad,precio){return this.descripcion+'\n Cantidad:'+this.cantidad+'\n Precio:'+this.precio},
    importeTotal: function(cantidad,precio){return this.cantidad*this.precio},
    tipoIva:"asas",
    formaPago:"tarjeta",

}
alert('Informacion de la factura: \n'+factura.informacionfactura()+'\n Producto:\n Descripcion:'+producto.infoProducto()+'Importe Total:'+producto.importeTotal());
/*function total(precio,cantidad){
    this.precio = precio;
}
functio
var Car = function(wheels,seats,engines) {
  //Change this constructor
  this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
};

//Try it out here
var myCar=new Car(3,1,2);
var Car = function() {
  // this is a private variable
  var speed = 10;

  // these are public methods
  this.accelerate = function(change) {
    speed += change;
  };

  this.decelerate = function() {
    speed -= 5;
  };

  this.getSpeed = function() {
    return speed;
  };
};
"1"
*/
