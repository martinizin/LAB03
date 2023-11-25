// Función para agregar una nueva tarea
function agregarTarea() {
    var nuevaTareaInput = document.getElementById('nuevaTarea');
    var nuevaTareaValor = nuevaTareaInput.value;

    if (nuevaTareaValor.trim() === '') {
        alert('Por favor, ingrese una tarea válida.');
        return;
    }

    var nuevoElemento = crearElementoLista(nuevaTareaValor);
    var listaTareas = document.getElementById('listaTareas');
    
    listaTareas.appendChild(nuevoElemento);
    nuevaTareaInput.value = '';
}

// Función para crear un nuevo elemento de lista
function crearElementoLista(contenido) {
    var nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = contenido;
    return nuevoElemento;
}

// Evento de clic para el botón de agregar tarea
document.getElementById('agregarTareaBtn').addEventListener('click', agregarTarea);
