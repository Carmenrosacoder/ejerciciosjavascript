var c = parseInt(prompt("Ingresa el # de sucursales"))
var totTienda;
var totSucursal;
var totEmpresa = 0;
function autoservicios(){
    for(var i=1;i<=c;i++){
        var t=parseInt(prompt('Ingresa el # de tiendas de la sucursal:'+i));
        totSucursal=0;
        for(var e=1;e<=t;e++){
            var p=parseInt(prompt('Ingrese el numero de empleados de la tienda :'+e+'de la sucursal ' + i));
            totTienda = 0;
            for(var v=1; v<=p; v++){
                var ventaEmpleado = parseInt(prompt("Ingresa la venta del empleado " + k + " de la tienda " + j + " de la sucursal " + i))
    			document.write("Sucursal: " + i + "<br>Tienda: " + j + "<br>Empleado: " + k + "<br>Venta: " +ventaEmpleado + "<br>" + separador + "<br>");
    			totalTienda += ventaEmpleado;
            }
            document.write("Sucursal: " + i + "<br>Tienda: " + j + "<br>Venta: " + totalTienda + "<br>" + separador + "<br>")
    		totalSucursal += totalTienda;
        }
        document.write("Sucursal: " + i + "<br>Venta: " + totalSucursal + "<br>" + separador + "<br>")
    	totalEmpresa += totalSucursal;
    }

}autoservicios();
document.write("Venta Total: " + totalEmpresa)
