// script.js

function mostrarDetalles(enlace, titulo, descripcion) {
    document.getElementById('modal-titulo').innerText = titulo;
    document.getElementById('modal-descripcion').innerText = descripcion;
    document.getElementById('modal-enlace').href = enlace;
    document.getElementById('modal').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
}

// Cierra el modal si se hace clic fuera de él
window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}