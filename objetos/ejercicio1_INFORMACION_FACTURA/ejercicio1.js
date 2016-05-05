/*Definir la estructura de un objeto que almacena una factura. Las facturas están formadas por la información de la propia empresa
(nombre de la empresa, dirección, teléfono, NIF), la información del cliente (similar a la de la empresa), una lista de elementos
(cada uno de los cuales dispone de descripción, precio, cantidad) y otra información básica de la factura (importe total, tipo de iva,
 forma de pago).
Una vez definidas las propiedades del objeto, añadir un método que calcule el importe total de la factura y actualice el valor de la propiedad correspondiente. Por último, añadir otro método que muestre por pantalla el importe total de la factura.*/

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
