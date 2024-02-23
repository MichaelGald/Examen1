let a = parseInt(prompt('Ingrese el numero de a:'));
let b = parseInt(prompt('Ingrese el numero de b:'));
let c = parseInt(prompt('Ingrese el numero de c:'));

let x1;
let x2;

x1 = (-b+ Math.sqrt((Math.pow(b,2)) - 4*a*c))/(2*a);
x2 = (-b- Math.sqrt((Math.pow(b,2)) - 4*a*c))/(2*a);

console.log(`Las soluciones son x1 = ${x1} y x2 = ${x2}`);