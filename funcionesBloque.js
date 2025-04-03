// Función para agregar una cruz (X) en un bloque
export function agregarCruz(bloque) {
    let cruz = document.createElement('button');
    cruz.className = 'cruz';  
    cruz.innerHTML = 'X'; 

    // Al hacer clic en la cruz, eliminamos el bloque
    cruz.onclick = () => {
        bloque.remove();
    };

    bloque.appendChild(cruz);  // Añadir la cruz al bloque
    return cruz;
}

// Función para agregar un check (marca de verificación) en un bloque
export function agregarCheck(bloque) {
    let check = document.createElement('button');
    check.className = 'check';  // Estilo para el check
    check.innerHTML = '✔';  // El contenido del check

    // Al hacer clic en el check, cambiamos el color de fondo del bloque o alguna otra acción
    check.onclick = () => {
        bloque.style.backgroundColor = '#d3ffd3';  // Cambiar color de fondo como ejemplo
    };

    bloque.appendChild(check);  // Añadir el check al bloque
    return check;
}

// Función para eliminar un bloque completo
export function eliminarBloque(bloque) {
    bloque.remove();  // Eliminar el bloque de la pantalla
}
