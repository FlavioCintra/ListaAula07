

var peso = prompt("Qual o peso?");
var altura = prompt("Qual a altura?");

var resultado;
resultado = peso/altura

if (resultado < 18.5)
{
    
    alert("Peso abaixo do normal");
}
else if (resultado >= 18.5 && resultado <= 24.9) 
{
    alert("Peso  ideal, seu IMC é: "+resultado);
}
else if (resultado >= 25 && resultado <= 29.9) 
{
    alert("Acima do peso, seu IMC é: "+resultado);
}
else if (resultado >= 30 && resultado <= 34.9) 
{
    alert("Obesidade grau I, seu IMC é: "+resultado);
}
else if (resultado >= 35 && resultado <= 40) 
{
    alert("Obesidade grau II, seu IMC é: "+resultado);
}
else if (resultado > 40) 
{
    alert("Obesidade grau III, seu IMC é: "+resultado);
}
