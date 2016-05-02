var menor=99999;
var n=[];
var b=0;
var mayor=0;
function ordenando(){
    for(var i=1;i<=3;i++){
    n[i]=[];
    n[i]=parseInt(prompt('Ingrese numero:'));
    var a=n[i]
if(a<menor){
 b=menor;
 menor=a;}
else
{ menor=menor;
 mayor=a;}
}
}ordenando();
console.log(menor+'\n'+b+'\n'+mayor);
