import { suma, resta, multiplicacion, division } from './calculadora.js';

let operando1 = 0;
let operacion = '';
var display = document.getElementById("display");


const insertarNumero = (numero) => {
    if (display.textContent === "0" || display.textContent === "Error") {
        display.textContent = numero;
    } else {
        display.textContent += numero;
    }
}


const b12 = () => {
    display.textContent += "0";
};

const Punto = () => {
    if (!display.textContent.includes(".")) {
        display.textContent += ".";
    }
};

const limpiar = () => {
    display.textContent = '0';
    operando1 = 0;
};

const realizarOperacion = () => {
    let operando2 = parseFloat(display.textContent);

    switch (operacion) {
        case 'suma':
            display.textContent = suma(operando1, operando2).toFixed(2);
            break;
        case 'resta':
            display.textContent = resta(operando1, operando2).toFixed(2);
            break;
        case 'multiplicacion':
            display.textContent = multiplicacion(operando1, operando2).toFixed(2);
            break;
        case 'division':
            if (operando2 === 0) {
                display.textContent = 'Error';
            } else {
                display.textContent = division(operando1, operando2).toFixed(2);
            }
            break;
        default:
            break;
    }
};

const setOperacion = (op) => {
    operacion = op;
    operando1 = parseFloat(display.textContent);
    display.textContent = '0';
};

document.getElementById("btn0").addEventListener('click', b12);
document.getElementById("btn1").addEventListener('click', () => insertarNumero('1'));
document.getElementById("btn2").addEventListener('click', () => insertarNumero('2'));
document.getElementById("btn3").addEventListener('click', () => insertarNumero('3'));
document.getElementById("btn4").addEventListener('click', () => insertarNumero('4'));
document.getElementById("btn5").addEventListener('click', () => insertarNumero('5'));
document.getElementById("btn6").addEventListener('click', () => insertarNumero('6'));
document.getElementById("btn7").addEventListener('click', () => insertarNumero('7'));
document.getElementById("btn8").addEventListener('click', () => insertarNumero('8'));
document.getElementById("btn9").addEventListener('click', () => insertarNumero('9'));
document.getElementById("btnpunto").addEventListener('click', Punto);
document.getElementById("btnlimpiar").addEventListener('click', limpiar);

document.getElementById("btnigual").addEventListener('click', realizarOperacion);

document.getElementById("btnsuma").addEventListener('click', () => {
    operacion = 'suma';
});

document.getElementById("btnresta").addEventListener('click', () => {
    operacion = 'resta';
});

document.getElementById("btnmultiplicacion").addEventListener('click', () => {
    operacion = 'multiplicacion';
});

document.getElementById("btndivision").addEventListener('click', () => {
    operacion = 'division';
});
