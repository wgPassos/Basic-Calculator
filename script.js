let n1 = document.querySelector("#n1");
let n2 = document.querySelector("#n2");
let button = document.querySelector("button");
let resultado = document.querySelector("span");


function inputVazio() {
    if (n1.value === "" || n2.value === "")  {          
        alert("Enter a number in all fields."); 
    limparResultado();
    }
}

function limparResultado () {
    let resultado, n1, n2;
    resultado.innerHTML = "";
    n1.innerHTML = "";
    n2.innerHTML = "";
}

function somar() {
    inputVazio();
    let resultadoSoma = parseFloat(n1.value) + parseFloat(n2.value);

    resultado.innerHTML = resultadoSoma.toFixed(2);
    n1.value = "";
    n2.value = "";
}

function subtrair() {
    inputVazio();
    let resultadoS = parseFloat(n1.value) - parseFloat(n2.value);
    
    resultado.innerHTML = resultadoS.toFixed(2);
    n1.value = "";
    n2.value = "";
    
}

function multiplicar() {
    inputVazio();
    let resultadoM = parseFloat(n1.value) * parseFloat(n2.value);

    resultado.innerHTML = resultadoM.toFixed(2);
    n1.value = "";
    n2.value = "";
    
}

function dividir() {
    inputVazio();
    let resultadoD = parseFloat(n1.value) / parseFloat(n2.value);

    resultado.innerHTML = resultadoD.toFixed(2);
    n1.value = "";
    n2.value = "";
}
