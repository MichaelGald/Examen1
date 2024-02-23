let listaAlumnos = [];
function agregarAlumno() {
    let nombre = prompt("Ingrese el nombre del alumno:");
    let edad = prompt("Ingrese la edad del alumno:");
    let calificacion = prompt("Ingrese la calificación del alumno:");
    let alumno = {
        nombre: nombre,
        edad: edad,
        calificacion: calificacion
    };
    listaAlumnos.push(alumno);
}
function verificarAprobacion(calificacion) {
    if (calificacion >= 65) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
}

let continuar = true;
while (continuar) {
    agregarAlumno();
    let respuesta = prompt("¿Desea agregar otro alumno?\n1 para terminar\nCaulquier numero se avanza");
    if (respuesta ==1) {
        continuar = false;
    }
}

console.log("Lista de Alumnos:");
listaAlumnos.forEach(alumno => {
    let estado = verificarAprobacion(alumno.calificacion);
    console.log(`Nombre: ${alumno.nombre}, Edad: ${alumno.edad}, Calificación: ${alumno.calificacion}, Estado: ${estado}`);
});
