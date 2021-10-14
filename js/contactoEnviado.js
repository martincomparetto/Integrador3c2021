$(document).ready(function() {
    const urlEnviada = window.location.search;
    console.log(urlEnviada);

    const ulrParametros = new URLSearchParams(urlEnviada);
    console.log(ulrParametros.get("nombre"));
    console.log(ulrParametros.get("apellido"));

    $("#detalleEnvio").html(`Se envió la siguiente información: ${ulrParametros.get("nombre")} y ${ulrParametros.get("apellido")}`)
});