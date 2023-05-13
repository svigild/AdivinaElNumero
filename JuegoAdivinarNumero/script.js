//Input del usuario
const inputText = document.getElementById("numeroIntroducido");
inputText.disabled = true;
//Botón ¡Jugar!
const jugarBtn = document.getElementById("botonJugar");
//Botón Enviar número
const enviarBtn = document.getElementById("botonEnviar");
enviarBtn.disabled = true;
//Texto de Número de vidas
const numVidas = document.getElementById("vidas");

//Al clicar el botón de jugar, comenzará la partida (método empezarPartida())
jugarBtn.addEventListener("click", empezarPartida);

//Al clicar el botón de enviar, se comprobará si es el número correcto o no
enviarBtn.addEventListener("click", enviarNumero);

var numeroVidas;
var numero;

function empezarPartida(){

    //Borrar texto del input en caso de que se haya jugado una partida anteriormente
    inputText.value = "";
    
    //Primero se genera un número aleatorio del 1 al 50
    numero = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
    console.log("El número es: " + numero);

    //Establezco el número de vidas que tiene el usuario inicialmente (5)
    numeroVidas = 5;
    numVidas.textContent = "Número de vidas: " + numeroVidas;

    //Activo y desactivo los componentes correspondientes
    jugarBtn.disabled = true;
    inputText.disabled = false;
    enviarBtn.disabled = false;
};

function enviarNumero(){
    //Consigo el número que introdujo el usuario
    const numeroInput = inputText.value;
    //Si el usuario no ha introducido un número, se muestra un error
    if (isNaN(numeroInput)){
        alert('Por favor, introduzca un número.');
    } else {
        //Si todavía le quedan vidas, el juego continúa
        if (numeroVidas > 1) {
            if (numero != numeroInput) {
                inputText.value = "";
                numeroVidas = numeroVidas - 1;
                numVidas.textContent = "Número de vidas: " + numeroVidas;
                console.log("Vidas actuales: " + numeroVidas);
            } else {
                alert("¡Enhorabuena, has ganado!");
                inputText.disabled = true;
                enviarBtn.disabled = true;
                jugarBtn.disabled = false;
            }
        } else {
            console.log("Lo siento, has perdido.");
            inputText.value = "";
            inputText.disabled = true;
            enviarBtn.disabled = true;
            jugarBtn.disabled = false;
            jugarBtn.textContent = "Jugar de nuevo";
        }
    }

};