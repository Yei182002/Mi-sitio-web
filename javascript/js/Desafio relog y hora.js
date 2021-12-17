/* Obtener fecha y hora GTM del navegador */
console.log("===Fecha y Hora GMT===");
var timeGMT  = new Date ();
console.log(timeGMT);

/* Convertir fecha a string */
console.log("===Fecha y Hora Local===");
var timeCurrentStr = new Date();
console.log(timeCurrentStr.toString());

/* Obtener dia */
console.log("===Obtener Día de la Fecha===");
var numDiaSemana = new Date();
console.log(numDiaSemana.getDay());

/* Convertir Dia con un Array*/
var diaSemana = new Date();
var dia = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
var diaNum = diaSemana.getDay();
console.log("Día: " + dia[diaNum]);

/* Metodos mas comunes */ 
console.log("===Fecha y Hora Local Desfragmentada===");
var currentTime = new Date();
console.log("Día de la semana: " + currentTime.getDay());
console.log("Mes del año: " + currentTime.getMonth());
console.log("Día del mes: " + currentTime.getDate());
console.log("Año:" + currentTime.getFullYear());
console.log("Hora: " + currentTime.getHours());
console.log("Minutos: " + currentTime.getMinutes());
console.log("Segundos: " + currentTime.getSeconds());
console.log("Milisegundos: " + currentTime.getUTCMilliseconds());

/* Especificando fechas para establecer diferencias*/
var newYear = new Date("January 1, 2021");
var fechaHoy = new Date();

/* Hallamos los milisegundos transcurridos desde 1970 */
var msToday = fechaHoy.getTime();
var msNewYear = newYear.getTime();
// Hallamos la diferencia en milisegundos 
// entre ambas fechas
var msDiff = msNewYear - msToday;
var diasDiff = msDiff / (1000 * 60 * 24);
console.log("Días de diferencia: " + diasDiff);
//Quitar decimales
diasDiff = Math.floor(diasDiff);
console.log("Días de diferencia sin dec.: " + diasDiff);

/* Ingresar fecha y hora*/ 
var fecha_hora = new Date("May 23, 2020 18:04:00");
console.log("Año: " + fecha_hora.getFullYear());
console.log("Mes: " + fecha_hora.getMonth());
console.log("Día:" + fecha_hora.getDate());
console.log("Horas: " + fecha_hora.getHours());
console.log("Minutos: " + fecha_hora.getMinutes());

/*Ingresar Fecha y hora que se pueda modificar*/
/* var fechaFormat =
new Date(Date.UTC(year, month, day, hour, minutes, seconds)); */
console.log("===Formatos de Fecha que se pueden modificar===");
var updateFecha = new Date(Date.UTC(2020, 0, 15, 4, 1, 0));
updateFecha.setFullYear(2022);
updateFecha.setMonth(11);
updateFecha.setDate(24);
console.log("Año actualizado: " + updateFecha.getFullYear());
console.log("Mes actualizado: " + updateFecha.getMonth());
console.log("Día actualizado: " + updateFechag.getDate()); 

/* Minutos de diferencia */
/* Este ejerciccio es muy practico para 
establecer un limite de tiempo en lecciones*/
console.log("Diferencia de horaas y Minutos");
var fechaActual = new Date ();
var limiteLeccion = new Date();
//Agregamos 30 minutos 
var TiempoExamen = limiteLeccion.setMinutes(limiteLeccion.getMinutes() + 30);
//FECHA LIMITE
console.log("El examen se cerrara en 30 minutos: ");
console.log("Día: " + limiteLeccion.getDate());
console.log("Hora: " + limiteLeccion.getHours());
console.log("Minutos: " + limiteLeccion.getMinutes());
console.log("Segundos: " + limiteLeccion.getSeconds());

/* Calcular tiempo restante para el cierre del programa*/
var minDiff = limiteLeccion.getTime() - fechaActual.getTime();
var minRestantes = Math.floor((minDiff / 1000) / 60);
var segRestantesTotales = Math.floor(minDiff / 1000);
/* Hallamos los segundos restantes segun el minuto mostradpo*/
var segRestantes = segRestantesTotales - (minRestantes.toFixed(0) * 60);
console.log(minRestantes.toFixed(0) + ":" + segRestantes.toFixed(0));
var limiteLeccion = new Date(2020, 04, 25, 7, 47,0);
// Le damos formato a los minutos y a los segundos //
if (minRestantes <10) {
    minRestantes = "0" + minRestantes.toString();
}
if (segRestantes <10) {
    segRestantes = "0" + segRestantes.toString();
}
/* Minutos de diferencia */
/* Este ejercicio es muy practico para establecer un limite de tiempo de lecciones*/
console.log("===Diferencia de horas y Minutos===");
var fechaActual = new Date();
var limiteLeccion = new Date(2020, 04, 25, 7, 47, 0);
//Agregamos 30 minutos 
var TiempoExamen = limiteLeccion.setMinutes(limiteLeccion.getMinutes() + 30);
console.log("El examen se cerra en: ");
console.log("Día: " + limiteLeccion.getDate());
console.log("Hora: " + limiteLeccion.getHours());
console.log("Minutos: "+ limiteLeccion.getMinutes());
console.log("Segundos: " + limiteLeccion.getSeconds());
/* calcular tiempo restante para el cierre del examne*/ 
var minDiff = limiteLeccion.getTime() - fechaActual.getTime();
var minRestantes = Math.floor((minDiff / 1000) /60);
var segRestantesTotales = Math.floor(minDiff / 1000);
/*Hallamos los segundos restantes segun el minuto mostrado*/
var segRestantes = segRestantesTotales - (minRestantes.toFixed(0) * 60);
//le damos formato a los minutos y a los segundos
if (minRestantes < 10){
    minRestantes = "0" + segRestantes.toString();
}
if (segRestantes < 10) {
    segRestantes ="0" + segRestantes.toString();
}
console.log("El examen cierra en: " +
       minRestantes + "" + segRestantes);