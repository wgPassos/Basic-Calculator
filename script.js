let n1 = document.querySelector("#n1");
let n2 = document.querySelector("#n2");
let button = document.querySelector("button");
let resultado = document.querySelector("span");

// function inputVazio;
// button.addEventListener("click", inputVazio);

function inputVazio() {
    if ((n1.value === "" || n2.value === "")) {
        // resultado.style.display = "none";
        alert("Insert a number in the inputs.");
        resultado.value = "";
    }
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