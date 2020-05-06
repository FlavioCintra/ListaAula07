var mensagem = "“Exercício 3 da lista da aula 07";
alert(mensagem);

var media;

num1 = prompt("digite o primeiro valor:");
num2 = prompt("digite o segundo valor:");
num3 = prompt("digite o terceiro valor:");
num4 = prompt("digite o quarto valor:");


if(num1 == num2 || num1 == num3 || num2 == num3 || num1 == num4 || num2 == num4 || num3 == num4)
{
    alert("Não pode ter numeros iguais digitados");
}
else
{
    media = (num1+num2+num3+num4)/4;
    if(num1 > num2 && num2 > num3 && num3 > num4)
    {
        alert("Maior Número: "+num1);
        alert("Menor Número: "+num4);
        alert("Média dos valores digitados: "+media);
    }

    if(num1 < num2 && num2 < num3 && num3 < num4)
    { 
        alert("Maior Número: "+num4);
        alert("Menor Número: "+num1);
        alert("Média dos valores digitados: "+media); 
    }

}

