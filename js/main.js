/*---RELOJ---*/
function reloj()
    {
    horaActual = new Date();
    hora = horaActual.getHours();
    minuto = horaActual.getMinutes();
    segundo = horaActual.getSeconds();
    str_segundo = new String (segundo);
    if (str_segundo.length == 1)
      segundo = "0" + segundo;
      str_minuto = new String (minuto);
    if (str_minuto.length == 1)
      minuto = "0" + minuto;
      str_hora = new String (hora);
    if (str_hora.length == 1)
      hora = "0" + hora;  
      horaActual = hora + " : " + minuto;           
    document.getElementById("reloj").innerHTML=horaActual;
    setTimeout("reloj()",1000);
      if(horaActual == "00 : 01")
      {          
        
      }    
    }
/*---FECHA---*/
function fecha()
    {
    var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
    var fechaActual=new Date();
    fechaActual = diasSemana[fechaActual.getDay()] + ", " + fechaActual.getDate() + " de " + meses[fechaActual.getMonth()] + " de " + fechaActual.getFullYear();
    document.getElementById("fecha").innerHTML=fechaActual;
    }
/*---Funcion ver mas---*/
function vermas(id)
{
if(id=="mas"){
document.getElementById("desplegar").style.display="block";   
document.getElementById("mas").style.display="none"; 
}
else{
document.getElementById("desplegar").style.display="none";
document.getElementById("mas").style.display="inline";
}
} 
//readCookie();

function readCookie() {
     if (document.cookie == "") {
	writeCookie();
        alertMessage();
     } else {
	var the_cookie = document.cookie;
	the_cookie = unescape(the_cookie);
	the_cookie_split = the_cookie.split(";");
	for (loop=0;loop<the_cookie_split.length;loop++) {
		var part_of_split = the_cookie_split[loop];
		var find_name = part_of_split.indexOf("nfti_date")
		if (find_name!=-1) {
			break;
		} // Close if
	} // Close for
	if (find_name==-1) {
		writeCookie();
	} else {
		var date_split = part_of_split.split("=");
		var last = date_split[1];
		last=fixTheDate(last);
		alert (" - Bienvenido - Tu última visita a esta página fue: "+last);
		writeCookie();
	} // Close if (find_name==-1)
      }
} // Close function readCookie()
function writeCookie() {
     var today = new Date();
     var the_date = new Date("December 31, 2023");
     var the_cookie_date = the_date.toGMTString();
     var the_cookie = "nfti_date="+escape(today);
     var the_cookie = the_cookie + ";expires=" + the_cookie_date;
     document.cookie=the_cookie
}
// MENSAJES
function alertMessage(){
     alert ("Hasta Pronto\nGracias por contar con nosotros.")
}
function fixTheDate(date) {
     var split = date.split(" ");
     var fix_the_time = split[3].split(":")
     var hours = fix_the_time[0]
     if (hours>=12) {
	var ampm="PM"
     } else {
	var ampm="AM"
     }
     if (hours > 12) {
	hours = hours-12
     }
     var new_time = hours+":"+fix_the_time[1]+" "+ampm
     var new_date = split[0]+" "+split[1]+", "+split[2]+" at "+new_time+", "+split[5]
     return new_date;
}

