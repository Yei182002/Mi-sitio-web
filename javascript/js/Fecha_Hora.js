


console.log("===fecha y hora===");
var currentTime= new Date();
var HoraActual= currentTime.getHours();
console.log("la hora actual por defecto del sistema es : "+ HoraActual);
if(HoraActual> 12 ){
console.log("La hora actual en formato 12 horas es: "+ (HoraActual-12)+ "PM");
}else if(HoraActual < 12){
    console.log("La hora actual en formato 12 horas es: "+ HoraActual+ "AM");
}
else if(HoraActual=12){
    console.log("La hora actual en formato 12 horas es: "+ HoraActual+ " del medio dia");

};

console.log("===Sistema que permitE saber cuántos días faltan para su próximo cumpleaños.===");

//estableciuendo las 2 fechas
var cumpleaños= new Date( "March 25 2022");
var fechaHoy=new Date();
//hallando los milisegundos
var msfechahoy=fechaHoy.getTime();
var msCumpleaños=cumpleaños.getTime();
//hallando la diferencia entre ambas fechas
var msDIFF= msCumpleaños-msfechahoy;
//establecemos los dias de diferencia
var diasDIFF= msDIFF/(1000*60*60*24);

diasDIFF= Math.floor(diasDIFF); 
console.log("faltan "+ diasDIFF +" dias para mi cumpleaños, ahorren para el regalo");

console.log("===Definir un sistema que cargue la fecha y si ese día el usuario cumple años arrojar un mensaje ===");

var fechaCumpleañosFelipe= new Date("March 25 2022");
var mescumpleañosFelipe=fechaCumpleañosFelipe.getMonth();
var diacumpleañosFelipe=fechaCumpleañosFelipe.getDate();
var fechaHoycumpleañosdia = fechaHoy.getDate();
var fechaHoycumpleañosmes= fechaHoy.getMonth();
console.log("hoy es el dia "+fechaHoycumpleañosdia+" del mes "+(fechaHoycumpleañosmes+1));

if(mescumpleañosFelipe===fechaHoycumpleañosmes && diacumpleañosFelipe===fechaHoycumpleañosdia ){
console.log("feliz cumpleaños Yeison")
}else{console.log("nadie cumple años hoy")};
 console.log("===Cuantos años voy a cumplir===");

 var fechaNacimiento= new Date("august 7 2002");
 var anioActual= fechaHoy.getFullYear();
 var anioNac=fechaNacimiento.getFullYear();
 var anioDIFF=anioActual-anioNac;
 console.log("yo naci en el "+ anioNac);
 console.log("y estamos en el "+anioActual);

 console.log("asi que tengo "+ anioDIFF);

 console.log("asi que voy a cumplir "+ (anioDIFF+1));

 console.log("===ejemplo extra===");

 var today = new Date();


 var aniohoy=today.getDate();
 var meshoy=today.getMonth();
 console.log("hoy es el dia "+aniohoy+" del mes " +(meshoy+1));

 var diadehoy=today;
 var cumpleluisa= new Date("august 7 2022");
 var milisegundosdiadehoy=diadehoy.getTime();
var milisegundoscumpleluisa=cumpleluisa.getTime();
var diferenciamilis=milisegundoscumpleluisa-milisegundosdiadehoy;
var diasdiferencia= diferenciamilis/(1000*60*60*24);

 alert(Math.floor(diasdiferencia));

