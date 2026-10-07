function somar(){
    let input1 = document.getElementById("numero1");
    let input2 = document.getElementById("numero2");
    const spanResultado = document.getElementById('resultado');

    const valor1 = parseFloat(input1.value) || 0;
    const valor2 = parseFloat(input2.value) || 0;
    const soma = valor1 + valor2;

    spanResultado.textContent = soma;

    input1.value = 0;
    input2.value = 0;

}

function subtrair(){
    const input1 = document.getElementById("numero1");
    const input2 = document.getElementById("numero2");
    const spanResultado = document.getElementById('resultado');

    const valor1 = parseFloat(input1.value) || 0;
    const valor2 = parseFloat(input2.value) || 0;
    const subtrair = valor1 - valor2;

    spanResultado.textContent = subtrair;

    input1.value = 0;
    input2.value = 0;

}

function multiplicar(){
    const input1 = document.getElementById("numero1");
    const input2 = document.getElementById("numero2");
    const spanResultado = document.getElementById('resultado');

    const valor1 = parseFloat(input1.value) || 0;
    const valor2 = parseFloat(input2.value) || 0;
    const subtrair = valor1 * valor2;

    spanResultado.textContent = subtrair;

    input1.value = 0;
    input2.value = 0;

}

function dividir(){
    const input1 = document.getElementById("numero1");
    const input2 = document.getElementById("numero2");
    const spanResultado = document.getElementById('resultado');

    const valor1 = parseFloat(input1.value) || 0;
    const valor2 = parseFloat(input2.value) || 0;
    const subtrair = valor1 / valor2;

    spanResultado.textContent = subtrair;

    input1.value = 0;
    input2.value = 0;

}