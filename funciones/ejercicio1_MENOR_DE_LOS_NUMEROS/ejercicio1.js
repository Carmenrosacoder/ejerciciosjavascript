var menor=999999;
function numeromenor(){
var a=[];
for(var i=0;i<3;i++){
    a[i]=[]
    a[i]=parseInt(prompt('Ingrese numero'+i+':'));
    if(a[i]< menor){ menor=a[i];}
    else {menor=menor;}
}
}numeromenor();
console.log('el menor es:'+menor);
