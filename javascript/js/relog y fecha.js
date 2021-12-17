// OBJETO DATE
let fechaActual = new Date();
console.log(fechaActual);
console.log(fechaActual.getDate());
console.log(fechaActual.getMonth());
console.log(fechaActual.getFullYear());
console.log(fechaActual.getDay());

//TIMESTAMP: 01 Enero 1970 -> Actualidad
console.log(fechaActual.getTime());
console.log(Date.now());
console.log(+fechaActual)

let fechaConTimestamp = new Date(1627033033900);
console.log(fechaConTimestamp);

//STRING
let fechaConString = new Date("2021 jan 23 23:00:14");
console.log(fechaConString);

let fechaConString2 = new Date("jan 23 2021");
console.log(fechaConString);

// Date(año, mes, fecha, horas, minutos, segundos, ms)
let fechaConParametros = new Date(2024, 12, 01);
console.log(fechaConParametros);

//SETTERS
fechaConParametros.setFullYear(1980);

console.log(fechaConParametros);

// EJERCICIO 1: Mostrar la fecha actual con los días de la semana en español con el siguiente formato: Domingo, 25 de julio de 2021

let fecha = new Date();
console.log(fecha.getDay());
console.log(fecha.getDate());
console.log(fecha.getMonth());
console.log(fecha.getFullYear());

let diaSemana = ['Domingo','Lunes', 'Martes','Miercoles','Jueves','Viernes','Sabado'];

console.log(diaSemana[fecha.getDay()]);

let mesAnyo = ['Enero','Febrero', 'Marzo','abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

console.log(mesAnyo[fecha.getMonth()]);

console.log(`${diaSemana[fecha.getDay()]}, ${fecha.getDate()} de ${mesAnyo[fecha.getMonth()]} de ${fecha.getFullYear()}`);

// EJERCICIO 2: Mostrar la hora actual en formato 03:15:15

let hora = new Date();
console.log(hora.toLocaleTimeString());