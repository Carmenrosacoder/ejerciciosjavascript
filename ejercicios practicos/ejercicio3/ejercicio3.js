
console.log("SERIE DE FIBONACCI\n");
num=Number(prompt("Introduce la cantidad de numeros: "));
function fibonacci(n)
 {
 if (n<2){
  return n;}
 else{
  return fibonacci(n-1) + fibonacci(n-2);}
 }

for(var i=0;i<=num-1;i++)
 {
   var resultado=0;
   resultado = fibonacci(i);
   console.log(resultado);
 }
