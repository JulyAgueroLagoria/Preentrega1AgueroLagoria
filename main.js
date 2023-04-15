//Genera un número aleatorio entre un rango de enteros
function tipo(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}

var fuego = 0;
var agua = 1;
var palnta = 2;

var opciones = ["Fuego", "Agua", "Planta"];

var opcionUsuario;
var opcionMaquina = tipo(0,2);

opcionUsuario = prompt("¿Qué eliges?\nFuego: 0\nAgua: 1\nPlanta: 2", 0);

alert("Elegiste " + opciones[opcionUsuario]);
alert("Javascript eligió " + opciones[opcionMaquina]);

if(opcionUsuario == fuego)
{
    if(opcionMaquina == fuego)
    {
        alert("Empate!");
    }
    else if(opcionMaquina == agua)
    {
        alert("Perdiste :( ");
    }
    else if(opcionMaquina == planta)
    {
        alert("Ganaste!");
    }
}
else if(opcionUsuario == agua)
{
    if(opcionMaquina == fuego)
    {
        alert("Ganaste!");
    }
    else if(opcionMaquina == agua)
    {
        alert("Empate!");
    }
    else if(opcionMaquina == planta)
    {
        alert("Perdiste!");
    }
}
else if(opcionUsuario == planta)
{
    if(opcionMaquina == fuego)
    {
        alert("Perdiste!");
    }
    else if(opcionMaquina == agua)
    {
        alert("Ganaste!");
    }
    else if(opcionMaquina == planta)
    {
        alert("Empate!");
    }
}
else
{
    alert("¿Qué hiciste?");
}