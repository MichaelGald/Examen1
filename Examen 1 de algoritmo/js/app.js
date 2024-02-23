let plantillaSalarial = [];
let TotalEmpresa;
nombrePlantilla = String(prompt('Ingrese el nombre de la plantilla:'));
nombreEmpresa = String(prompt('Ingrese el nombre de la empresa: '));
function agregarEmpleado() {
    let nombre = String(prompt('Ingrese el nombre del empleado'));
    let sueldo = parseFloat(prompt('Ingrese el sueldo:'));
    let ihss = sueldo*0.035;
    let infop = sueldo*0.015;
    let adelanto = parseFloat(prompt('Ingrese el adelanto:'));
    let prestamo = parseFloat(prompt('Ingrese el prestamo:'));
    let totalEmpleado = ((sueldo)-(ihss+infop+adelanto+prestamo));
    let i = totalEmpleado;
    TotalEmpresa =+ i;   // no me sale 
    let empleado = {
        Nombre: nombre,
        sueldo: sueldo,
        IHSS: ihss,
        INFOP: infop,
        Adelanto: adelanto,
        Prestamo: prestamo,
        Totalempleado: totalEmpleado
    };
    plantillaSalarial.push(empleado);
}
let continuar = true;
while (continuar) {
    agregarEmpleado();   
    let respuesta = prompt("¿Desea agregar otro alumno?\n1 para terminar\nCaulquier numero se avanza");
    if (respuesta == 1) {
        continuar = false;
    }
}
plantillaSalarial.forEach(empleado => console.table(empleado));
console.log(TotalEmpresa)