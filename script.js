
let intentos = 6;

function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}

function intentar(){
    const INTENTO = leerIntento();


    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';

    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
            console.log(INTENTO[i], "VERDE")
        } else if( palabra.includes(INTENTO[i]) ) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
            console.log(INTENTO[i], "AMARILLO")
        } else {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
            console.log(INTENTO[i], "GRIS")
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
		intentos--
    if (intentos==0){
        console.log("PERDISTE!")

    }
    if (INTENTO === palabra ) {
        terminar("GANASTE!");
        return;
    }
    if (intentos==0){
        terminar("PERDISTE!");
    }

}


function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}
const button = document.getElementById("guess-button");
const input = document.getElementById("guess-input");
const valor = input.value;
button.addEventListener("click", intentar);

let diccionario = ["ARBOL", "AVION", "BAZAR", "BROMA", "CARRO", "COCHE", 
    "DOLAR", "FUEGO", "GATOS", "HUEVO", "JOVEN", "LLAVE", 
    "NIEVE", "OVEJA", "PARED", "QUESO", "RATON", "SILLA", 
    "TIGRE", "VERDE", "ACTOR", "BANDA", "CASAS", "DINOS", "ELEVO", "FIRME", 
    "GLOBO", "HORNO", "IDEAL", "JAULA", "KOALA", "LIMON", 
    "MANGO", "NORTE", "OCASO", "PESCA", "QUEMA", "RADIO", 
    "SALTO", "TECHO"]

const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];