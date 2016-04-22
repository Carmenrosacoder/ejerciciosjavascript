/*var A[i][j];
for(var i=0;i<2;i++){
    for (var j=0; j <2; j++) {
        n=parseInt(prompt('Ingresar elementos de la matriz de orden 2 posicion: ('+i+','+j+'):'));

    }}
    document.write(A[i][j]);
    */
    var matriz=new Array(3);

    for (i = 0; i < 3; i++){
    matriz[i]=new Array(3);
    }

    for (i=0; i<3; i++)
    {
    for (e=0; e<3; e++)
    {
    matriz[i][e] = 'posición ' + i + ',' + e;
    }
    }

    for (i=0; i<3; i++)
    {
    for (e=0; e<3; e++)
    {
    document.write('<br />');
    document.write(matriz[i][e]);
    }
    }
