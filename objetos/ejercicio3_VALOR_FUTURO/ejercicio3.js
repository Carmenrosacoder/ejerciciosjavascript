/*valor_futuro =valor*Math.pow (1+tasa/100,periodo)*/
function valorFuturo(valor,tasa,periodo){
    this.valor=valor;
    this.tasa=tasa;
    this.periodo=periodo;
    this.calcularValorFuturo = function (){
        var valor_futuro =valor*Math.pow (1+tasa/100,periodo);
        alert(valor_futuro);
    }
}
va=parseFloat(prompt('Ingresar valor actual:'));
t=parseFloat(prompt('Ingresar tasa:'));
p=parseFloat(prompt('Ingresar periodo:'));
var valorFuturo= new valorFuturo(va,t,p);
valorFuturo.calcularValorFuturo();
