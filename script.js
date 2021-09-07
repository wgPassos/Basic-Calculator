let n1 = document.querySelector("#n1");
let n2 = document.querySelector("#n2");
let button = document.querySelector("button");
let resultado = document.querySelector("span");


function inputVazio() {
    if (n1.value === "" || n2.value === "")  {          
        alert("Enter a number in all fields."); 
    limparResultado();
        // if (resultado !== "") {
        //     limparResultado();
        // }
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
    resultado.innerHTML = parseFloat(n1.value) + parseFloat(n2.value);
    n1.value = "";
    n2.value = "";
}

function subtrair() {
    inputVazio();
    resultado.innerHTML = parseFloat(n1.value) - parseFloat(n2.value);
    n1.value = "";
    n2.value = "";
}

function multiplicar() {
    inputVazio();
    resultado.innerHTML = parseFloat(n1.value) * parseFloat(n2.value);
    n1.value = "";
    n2.value = "";
}

function dividir() {
    inputVazio();
    resultado.innerHTML = parseFloat(n1.value) / parseFloat(n2.value);
    n1.value = "";
    n2.value = "";
}
