var a= [];
   function listas(){
       for (var x = 1; x <=2; x++) {
       console.log('\n Lista'+x+'\n');
       var suma=0;
       for(var i=1;i<=3;i++){
            a[i]=[];
            a[i] =parseInt(prompt('Lista '+x+' Ingrese numero:'+i));
            suma+=a[i];
            console.log(a[i]);
        }
        console.log('suma lista'+x+':'+suma);
    }

   }listas();
