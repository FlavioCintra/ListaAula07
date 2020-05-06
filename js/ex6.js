var menu = "1 - Quadrado | 2- Retangulo | 3- Triangulo Retangulo | 4- Circulo";
var resultado = 0;
const pi= 3.14;

alert(menu);

var opcao = prompt("Qual figura deseja calcular a área?");

if (opcao == 1)
{
    var ladoQuadrado = prompt("Qual o tamanho do lado?");
    resultado = ladoQuadrado*ladoQuadrado;
    alert("Área: "+resultado);
}
else if (opcao == 2) 
{
    var ladoRetangulo1 = prompt("Qual o tamanho do lado?");
    var ladoRetangulo2 = prompt("E do outro?");
    resultado = ladoRetangulo1*ladoRetangulo2;
    alert("Área: "+resultado);
}
else if(opcao == 3)
{
    var base = prompt("Qual o tamanho da base?");
    var altura = prompt("Qual o tamnho da altura?");
    resultado = (base*altura)/2;
    alert("Área: "+resultado);
}
else if(opcao == 4)
{
    var raio = prompt("Qual o tamanho do raio?");
    resultado = pi*(raio*raio);
    alert("Área: "+resultado);
}
else
{
    alert("Não existe essa opção")
}
