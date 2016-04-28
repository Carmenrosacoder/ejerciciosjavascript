var numero=parseInt(prompt('Ingresar número'));
function primo(numero){
    for(var i=2; i<=numero;i++){
        if(numero%i===0) console.log('no es primo')
        else console.log('primo')
    }

}primo(numero);
