function somar(){
    const spanResultado = document.getElementById('resultado');

    lista.forEach( numero => {
        total += numero;
    })

    spanResultado.textContent = total;

}

function subtrair(){
    const spanResultado = document.getElementById('resultado');

    if (lista.length > 0) {
        total = lista[0];
        // Subtrai os próximos números da lista
        for (let i = 1; i < lista.length; i++) {
            total -= lista[i];
        }
    } else {
        total = 0;
    }

    spanResultado.textContent = total;
}



function multiplicar(){
    const spanResultado = document.getElementById('resultado');

    if (lista.length > 0) {
        total = lista[0];
        for (let i = 1; i < lista.length; i++) {
            total *= lista[i];
        }
    } else {
        total = 0;
    }

    spanResultado.textContent = total;
}


function dividir(){
   if (lista.length > 0) {
        total = lista[0];
        for (let i = 1; i < lista.length; i++) {
            if (lista[i] === 0) {
                spanResultado.textContent = "Erro (Divisão por 0)";
                return;
            }
            total /= lista[i];
        }
    } else {
        total = 0;
    }

    spanResultado.textContent = total;
}

let lista = [];
let total = 0;

function adicionar(){
    let input = document.getElementById("numero1");
    const valor1 = parseFloat(input.value) || 0;
    lista.push(valor1);
}