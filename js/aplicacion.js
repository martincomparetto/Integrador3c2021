$(document).ready(function() {
    const divBotones = $("#botonesNumeros");

    for (let index = 1; index <= 10; index++) {
        // divBotones.append(`<button onclick="MostrarAlertaBoton(${index})">Boton ${index}</button>`)
        divBotones.append(`<button>Boton ${index}</button>`)
    }

    $("#botonesNumeros > button").on("click", function() {
        const textoBoton = $(this).html();
        alert(`Se presionó el ${$(this).html()}`);
        $(this).css("background-color", "blue");
    });
});

const MostrarAlertaBoton = (numero) => {
    alert("Se presionó el boton " + numero);
}

// console.log("Escribimos algo que nos interese mostrar en la consola");
// console.log("Hola mundo!");

const mensaje = (mensaje) => document.getElementById("textResultado").value = mensaje;

const calcularSuperficie = () => {
    const radio = document.getElementById("textRadio").value;
    var superficie = pi * (radio * radio);
    // console.log(superficie);
    mensaje(`La superficie del circulo con radio ${radio} es ${superficie}`);
}

// mensaje("Hola Mundo!!!");

const pi = 3.141516;

// var radio = 10;
// calcularSuperficie(10);

// radio = 12;
// calcularSuperficie(12);

// radio = 15;
// calcularSuperficie(15);

function Saludar() {
    // Acceso al elemento para luego utilizar sus propiedades
    // var elementoNombre = document.getElementById("nombre");

    // console.log(elementoNombre);
    // console.log(elementoNombre.value);
    // console.log(elementoNombre.style);

    // Utilizar directamente una propidada
    var nombreIngresado = document.getElementById("nombre").value;

    // alert(`Hola ${nombreIngresado}`);
    var saludo = `Hola ${nombreIngresado}`;

    var elementoNuevo = document.createElement('h1');
    elementoNuevo.innerHTML = saludo;

    var div = document.getElementById("espacioSaludos");
    div.append(elementoNuevo);

}

const Calcular = () => {
    // var valor1 = parseFloat(document.getElementById("numero1").value);
    // var operacion = document.getElementById("operacion").value;
    // var valor2 = parseFloat(document.getElementById("numero2").value);
    var valor1 = parseFloat($("#numero1").val());
    var operacion = $("#operacion").val();
    var valor2 = parseFloat($("#numero2").val());
    var resultado;

    // console.log(typeof(valor1));
    // console.log(typeof(operacion));
    // console.log(valor2);

    if (Number.isNaN(valor1) || Number.isNaN(valor2)) {
        document.getElementById("resultado").value = "Error en numero ingresado";
    } else {
        // if (operacion == "+") {
        //     resultado = valor1 + valor2;
        // }
        // if (operacion == "-") {
        //     resultado = valor1 - valor2;
        // }
        // if (operacion == "*") {
        //     resultado = valor1 * valor2;
        // }
        // if (operacion == "/") {
        //     resultado = valor1 / valor2;
        // }

        // switch (operacion) {
        //     case "+":
        //         resultado = valor1 + valor2;
        //         break;
        //     case "-":
        //         resultado = valor1 - valor2;
        //         break;
        //     case "*":
        //         resultado = valor1 * valor2;
        //         break;
        //     case "/":
        //         resultado = valor1 / valor2;
        //         break;
        // }

        if (operacion == "+") {
            resultado = valor1 + valor2;
        } else if (operacion == "-") {
            resultado = valor1 - valor2;
        } else if (operacion == "*") {
            resultado = valor1 * valor2;
        } else if (operacion == "/") {
            resultado = valor1 / valor2;
        } else {
            resultado = "Operacion no identificada";
        }

        document.getElementById("resultado").value = resultado;
    }
}

const ContarFOR = () => {
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var resultado = "";
    var div = document.getElementById("conteo");

    for (var i = 1; i <= cantidad; i++) {
        // console.log(i);
        resultado = resultado + i;
        var item = document.createElement("p");
        item.innerHTML = `El valor es ${i}`;
        div.append(item);
    }

    document.getElementById("resultadoConteo").value = resultado;
}

const ContarWHILE = () => {
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var resultado = "";
    var div = document.getElementById("conteo");

    var i = 1;
    while (i <= cantidad) {
        resultado = resultado + i;
        var item = document.createElement("p");
        item.innerHTML = `El valor es ${i}`;
        div.append(item);
        i++;
    }

    document.getElementById("resultadoConteo").value = resultado;
}

const SaludarWHILE = () => {
    // var nombre = "salir";

    // while (nombre != "salir")
    // {
    //     nombre = prompt("Ingrese un nombre");
    //     alert("Hola " + nombre);
    // }

    var nombre = "salir";
    do {
        nombre = prompt("Ingrese un nombre");
        if (nombre != "salir") {
            alert("Hola " + nombre);
        } else {
            alert("Chau hasta luego!");
        }
    } while (nombre != "salir")
}

const CrearObjetoLiteral = () => {
    var nombreIngresado = document.getElementById("nombre").value;
    var apellidoIngresado = document.getElementById("apellido").value;

    var persona = {
        nombre: nombreIngresado,
        apellido: apellidoIngresado,
        edad: 45
    }

    console.log(persona);
}

// var arrayNombres = ["Leonel", "Tony", "Maria", "Juana"];
var arrayNombres = [];

const AgregarNombreArray = () => {
    var nombreIngresado = document.getElementById("nombrePersona").value;
    arrayNombres.push(nombreIngresado);
    document.getElementById("nombrePersona").value = "";
    MostrarArray();
}

const MostrarArray = () => {
    var div = document.getElementById("listaNombres");

    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }

    for (let index = 0; index < arrayNombres.length; index++) {
        var item = document.createElement("h5");
        item.style.backgroundColor = "#AA33FF";
        item.innerHTML = arrayNombres[index];
        div.append(item);
    }
}

var arrayPersonas = [];

const AgregarPersona = () => {
    var nombreIngresado = document.getElementById("nombrePersonaObj").value;
    var apellidoIngresado = document.getElementById("apellidoPersonaObj").value;
    var edadIngresado = document.getElementById("edadPersonaObj").value;

    var nuevaPersona = {
        nombre: nombreIngresado,
        apellido: apellidoIngresado,
        edad: edadIngresado
    }

    arrayPersonas.push(nuevaPersona);

    document.getElementById("nombrePersonaObj").value = "";
    document.getElementById("apellidoPersonaObj").value = "";
    document.getElementById("edadPersonaObj").value = "";

    MostrarPersonas();
}

const MostrarPersonas = () => {
    var div = document.getElementById("listaNombresObj");
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }

    console.log(arrayPersonas.length);
    console.log(arrayPersonas);

    for (let index = 0; index < arrayPersonas.length; index++) {
        var item = document.createElement("h5");
        console.log(arrayPersonas[index]);
        item.innerHTML = `Nombre: ${arrayPersonas[index].nombre} Apellido: ${arrayPersonas[index].apellido} Edad: ${arrayPersonas[index].edad}`
        div.append(item);
    }
}

variables();

function variables() {
    let variable1 = "valor1";
    console.log(variable1);

    if (true) {
        let variable1 = 0;
        var variable2 = "pepe"
        console.log(variable1);
    }

    console.log(variable1);
    console.log(variable2);
}

// let arrayBebidas = ["Agua", "Soda", "Gaseosa", "Cerveza", "Vino"];
// let arrayPreciosBebidas = [50, 60, 70, 150, 200];

let arrayProductosBebidas = [
    {
        Producto: "Agua",
        Precio: 50
    },
    {
        Producto: "Soda",
        Precio: 60
    },
    {
        Producto: "Gaseosa",
        Precio: 70
    },
    {
        Producto: "Cerveza",
        Precio: 150
    },
    {
        Producto: "Vino",
        Precio: 200
    }
];

let arrayComidas = ["Pizza", "Hamburguesa", "Ensalada", "Milanesa", "Sopa"]
let pedido = "";
let cantidadProductos = 0;
let importeTotal = 0;

const AgregarMenuBebida = (item) => {
    let cantidad = parseInt(document.getElementById("cantidadPedido").value);

    console.log(arrayProductosBebidas[item]);
    let bebida = arrayProductosBebidas[item].Producto;
    pedido = pedido + `Se agrego ${cantidad} ${bebida} - `;
    cantidadProductos = cantidadProductos + cantidad;
    importeTotal = importeTotal + CalcularTotalItem(arrayProductosBebidas[item].Precio, cantidad);

    VisualizarDatos();
}

const AgregarMenuComida = (item) => {
    let cantidad = parseInt(document.getElementById("cantidadPedido").value);
    pedido = pedido + `Se agrego ${cantidad} ${arrayComidas[item]} - `;
    cantidadProductos = cantidadProductos + cantidad;

    VisualizarDatos();
}

const NuevoPedido = () => {
    pedido = "";
    cantidadProductos = 0;
    importeTotal = 0;
    VisualizarDatos();
}

const VisualizarDatos = () => {
    document.getElementById("pedidoMesa").value = pedido;
    document.getElementById("cantidadItemsPedidos").value = cantidadProductos;
    document.getElementById("totalItemsPedidos").value = importeTotal;
}

const CalcularTotalItem = (precio, cantidad) => {
    let totalItem = precio * cantidad;
    if (cantidad > 5)
    {
        totalItem = totalItem - (totalItem * 10 / 100);
    }
    return totalItem;
}

let cadena = "";
const Concatenar = () => {
    cadena = cadena + "a";
    $("#textoConcatenado").val(cadena);
}

const EliminarUltimo = () => {
    cadena = cadena.substring(0, cadena.length - 1);
    $("#textoConcatenado").val(cadena);
}