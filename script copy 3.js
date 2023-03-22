const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#resultado');


btn.addEventListener('click', sumarInputValues);

function sumarInputValues(){
    let inputN1 = Number(input1.value);
    let inputN2 = Number(input2.value);
    let inputN3 = inputN1 + inputN2;
    pResult.innerText = 'Resultado: ' + inputN3;
}

// Nota: dentro de la funcion podemos llamar a event.preventDefault(); para que no se 
// recargue si es que no asignamos type="button" al button para que no sea por default
// "SubmitEvent"