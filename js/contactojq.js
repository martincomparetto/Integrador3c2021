$(document).ready(function () {
    $('h1').show(2000);
    $('#botones>button').addClass('btn').addClass('btn-primary');
    $('#agregarBotones').addClass('btn').addClass('btn-success');
    $('#borrarBotones').addClass('btn').addClass('btn-danger');

    $('.btn.btn-primary').on({
        mouseenter: function () {
            $(this).css("background-color", "white");
        },
        mouseleave: function () {
            $(this).css("background-color", "blue");
        }
    });

});

const borrarBotones = () => {
    $('#botones').empty();
}

const agregarBotones = () => {
    for (let index = 0; index < 10; index++) {
        $('#botones').append(`<button class="btn btn-primary">${index}</button>`);
    }
}

const agregarItem = () => {
    let item = $("#item").val();
    $('#lista').append(`<option value="${item}">${item}</option>`);
    $('#item').val("");
}

const eliminarItem = () => {
    let item = $("#lista").val();
    $(`#lista > [value=${item}`).remove();
    $('#item').val("");
}


const suma = (numero1, numero2) => {
    let suma = numero1 + numero2;
    console.log("Dentro de la funcion: " + suma);
    return suma;
}

let resultado = suma(10, 10);
console.log("Fuera de la función: " + resultado);


