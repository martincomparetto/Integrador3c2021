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




