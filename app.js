// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Almacenar el nombre de las personas que sean ingresadas.
let nombres = [];

// Ingresar un nombre en el array y añadirlo a la lista de amigos.
function agregarAmigo() {
    let ingresarNombre = document.getElementById('amigo');
    let nombreDeAmigo = ingresarNombre.value;
    if (!nombreDeAmigo) {
        alert("Por favor, ingrese un nombre.");
        return;
    } else {
        //Actualizar el array de amigos.
        nombres.push(nombreDeAmigo);
        //Limpiar caja.
        ingresarNombre.value = '';
        ingresarNombre.focus();
        mostrarAmigos();
    }
}

function mostrarAmigos() {
    //Obtener el elemento de la lista:
    let listaDeAmigos = document.getElementById('listaAmigos');
    //Limpiar la lista existente, para asegurarse de que no haya duplicados al actualizar.
    listaDeAmigos.innerHTML = "";

    // Recorrer el arreglo amigos y crear elementos de lista (<li>) para cada nombre.
    for (let i = 0; i < nombres.length; i++) {
        let itemLista = document.createElement("li");
        itemLista.textContent = nombres[i];
        //Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
        listaDeAmigos.appendChild(itemLista);
    }
}

// Función para realizar el sorteo de un amigo aleatorio.

function sortearAmigo() {
    //Valida que haya nombre diponibles para realizar el sorteo.
    if (nombres.length === 0) {
        alert("Por favor, inserte los nombres para realizar el sorteo");
        return;
    }
    //Generar un índice aleatorio y Obtener el nombre del ganador del sorteo.
    let indice = Math.floor(Math.random() * nombres.length);
     // Extrae y elimina el nombre de amigo que gano el sorteo de array.
    // splice(indice, 1) devuelve un array con el elemento eliminado, por lo que [0] extrae ese único elemento.
    let amigoSorteado = nombres.splice(indice, 1)[0];

    //Mostrar el resultado del sorteo.
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El ganador es...: ${amigoSorteado}`;
    mostrarAmigos();

     // Muestra una alerta cuando todas las personas han sido sorteados.
    if (nombres.length === 0) {
        setTimeout(() => {
            alert("Ya se realizo el sorteo de todas las personas de la lista");
        }, 600);
    }

    //Limpiar lista
    let limpiarLista = document.getElementById('listaAmigos');
    limpiarLista.innerHTML = "";
}

//JCCA.