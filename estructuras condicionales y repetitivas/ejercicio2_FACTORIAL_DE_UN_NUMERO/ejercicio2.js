function factorial(){
    n=parseInt(prompt('Hallar factorial de número:'));
    producto=1;
        for(var i=n;i>0;i--){
            console.log(i+'x ');
            producto=producto*i;
        }
}factorial();
console.log(+n+'!='+producto)
