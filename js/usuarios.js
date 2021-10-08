const mostrarHora = () => {
    let ahora = new Date();
    $("#reloj").val(ahora.toLocaleTimeString());
}

const reloj = setInterval(mostrarHora, 1000);

// const listarUsuarios = () => {
//     $.get('https://reqres.in/api/users', (respuesta) => {
//         setTimeout(() => {
//             for (let index = 0; index < respuesta.per_page; index++) {
//                 const itemUsuario = respuesta.data[index];
//                 agregarControlUsuario(itemUsuario.first_name, itemUsuario.last_name, itemUsuario.email, itemUsuario.avatar);
//             }
//         }, 10000);
//     });
// }

const listarUsuarios = () => {
    let data = {
        type: "GET",
        url: "https://reqres.in/api/users",
        success: (respuesta) => {
            for (let index = 0; index < respuesta.per_page; index++) {
                const itemUsuario = respuesta.data[index];
                agregarControlUsuario(itemUsuario.first_name, itemUsuario.last_name, itemUsuario.email, itemUsuario.avatar);
            }
        },
        error: () => {
            let divUsarios = $("#lista-usuarios");
            divUsarios.append("<h2>Error al recuperar los usuarios</h2>");
        }
    };

    $.ajax(data);
}

const agregarControlUsuario = (nombre, apellido, email, urlImagen) => {
    let divUsarios = $("#lista-usuarios");
    divUsarios.append(`
    <div class="col">
        <div class="card h-100">
            <img src="${urlImagen}" class="card-img-top" alt="${nombre} ${apellido}">
            <div class="card-body">
                <h5 class="card-title">${nombre} ${apellido}</h5>
                <p class="card-text">${email}</p>
            </div>
        </div>
    </div>
    `);
}

const agregarUsuario = () => {
    let data = {
        type: "POST",
        url: "https://reqres.in/api/users",
        data: {
            name: "Martin",
            job: "Profe"
        },
        dataType: "json",
        success: (respuesta) => {
            console.log(respuesta);
            // for (let index = 0; index < respuesta.per_page; index++) {
            //     const itemUsuario = respuesta.data[index];
            //     agregarControlUsuario(itemUsuario.first_name, itemUsuario.last_name, itemUsuario.email, itemUsuario.avatar);
            // }
        },
        error: () => {
            let divUsarios = $("#lista-usuarios");
            divUsarios.append("<h2>Error al guardar usuario</h2>");
        }
    };

    $.ajax(data);
}