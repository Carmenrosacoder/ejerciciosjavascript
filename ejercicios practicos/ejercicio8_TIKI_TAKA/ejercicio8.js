function tikitaka(){
    suma1=0;
    suma2=0;
    suma3=0;
    cont2=0;
    cont=0;
    cont3 = 0;
    n=parseInt(prompt('Ingresar cuantas ventas realizara al dia :'));
    for(var i=1; i<=n;i++){
        pv=parseInt(prompt('Precio de venta'+i+'es:'));
        if(pv>1000){
            suma1+=pv;
            cont++;
        }
        else if(pv>500 && pv<=1000){
            suma2+=pv;
            cont2++;
        }
        else{
            suma3+=pv;
            cont3++;
        }
    }
}tikitaka();
document.write('Categoria mayores a 1000: #ventas:'+cont+'<br>'+'Monto vendido:'+suma1+'<br>'+'Categoria mayores a 500 y menor o igual que 1000: #ventas:'+cont2+'<br>'+'Monto vendido:'+suma2+'<br>'+'Categoria menores a 500: #ventas:'+cont3+'<br>'+'Monto vendido:'+suma3);
