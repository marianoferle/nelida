/*
Diseño y Programacion: 
 -*-IDEALES-*- comunicación multimedia
 www.idealesweb.com.ar
 (+54 11) 5951-2598  
 ideales.studio@gmail.com
 */


function borde(name){
	if(name=='comentario'){
	document.getElementById('texto').innerHTML = "";
	}else{
	if(name=='nombre'){
	document.getElementById('nombre').value = "";
	}else{
	if(name=='email'){
	document.getElementById('email').value = "";
	}else{
	if(name=='telefono'){
	document.getElementById('telefono').value = "";
	}
	}
	}
	}
}

function enviado(){
	alert("Su mensaje fue enviado con exito");
	}
