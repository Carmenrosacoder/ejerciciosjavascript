console.log('MULTIPLOS DE 11');
var suma=0;
for(i=0;i<3000;i++){
    if(i%11===0){
        console.log(i);
        suma+=i;
    }
}
console.log('La suma de ellos es:'+suma);
