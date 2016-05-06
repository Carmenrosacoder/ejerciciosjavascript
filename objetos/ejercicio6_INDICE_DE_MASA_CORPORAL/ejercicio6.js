var indice = {
    peso:null,
    altura:null,
    indiceMasaCorporal: function(peso,altura){
        return this.peso/this.altura
    },
}
indice.peso = parseFloat(prompt('Ingresar peso:'));
indice.altura = parseFloat(prompt('Ingresar altura'));
alert('IMC:'+indice.indiceMasaCorporal());
