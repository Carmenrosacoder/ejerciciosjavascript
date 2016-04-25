function autoservicios(){
    var total=0;
    c=parseInt(prompt('Numero de ciudades:'));
    for(var i=1;i<=c;i++){
        t=parseInt(prompt('Numero de tiendas:'));
        for(var e=1;e<=t;e++){
            p=parseInt(prompt('Ingrese el numero de empleados :'));
            for(var v=1; v<=p; v++){
                x=prompt('Ingrese cuanto vendio cada empleado:');
                total+=x;
            }
        }

    }

}autoservicios();
document.write(total);
