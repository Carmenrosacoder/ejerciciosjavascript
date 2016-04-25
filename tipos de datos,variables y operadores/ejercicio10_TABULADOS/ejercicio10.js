
 var a= [];
function det(){
    for(var i=1;i<=2;i++){
        a[i]=[];
        for (var j=1; j<=2; j++){
            a[i][j] =parseInt(prompt('Ingrese numero en la fila'+i+'columna'+j+':'));

            }
        }
        determ= a[1][1]*a[2][2]-a[1][2]*a[2][1];
   }det();
console.log('Matriz:\n'+a[1][1]+'\t'+a[1][2]+'\n'+a[2][1]+'\t'+a[2][2]);
console.log('determinante:'+determ);
