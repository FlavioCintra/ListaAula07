var num1, num2, num3;

var mensagem = "“Exercício 2 da lista da aula 07";
alert(mensagem);

num1 = prompt("digite o primeiro valor:");
num2 = prompt("digite o segundo valor:");
num3 = prompt("digite o terceiro valor:");

if(num1 == num2 || num1 == num3 || num2 == num3)
{
    alert("Não pode ter numeros iguais digitados");
}
else
{
    if(num1 > num2 && num2 > num3)
    {
        alert("Números na ordem: "+num3+" , "+num2+" , "+num1);
    }

    if(num1 < num2 && num2 < num3)
    {
        alert("Números na ordem: "+num1+" , "+num2+" , "+num3);
    }

    if(num1 > num2 && num2 < num3)
    {
        alert("Números na ordem: "+num2+" , "+num3+" , "+num1);
    }
}

