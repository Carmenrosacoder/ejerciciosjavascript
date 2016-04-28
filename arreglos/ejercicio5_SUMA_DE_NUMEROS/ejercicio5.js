var a=[];
var suma=0;
for (var i = 1; i <=10; i++) {
    a[i]=[];
    a[i] =parseInt(prompt('Ingrese numero'+i+':'));
    suma+=a[i];
}
console.log('la suma es:'+suma);
