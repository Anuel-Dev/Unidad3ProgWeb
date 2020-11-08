function hacerclic(){
	document.querySelector("#principal p").onclick=clic;
}

function clic(){
			fondo.style.background="black";
			titulo.style.color="red";
			alert("Color negro (como mi alma), texto rojo (rojo pasion).");
}
window.onload=hacerclic;
