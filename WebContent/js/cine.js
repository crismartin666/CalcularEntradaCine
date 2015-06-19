/***********************************************
 * Funciones para usar en todo el proyecto
 * 
 ***********************************************/

/*****************************************
 CINE DE ALMENDRALEJO (PAG 283)
 ******************************************/

/**
 * Calcula el precio de la entrada del Cine de Almendralejo
 * 
 * @return precio en euros, null si
 */
function calcularEntrada() {
	
	// Identificación de los objetos que intervienen en el calculo
	var dia    = document.getElementById("listaDias").value;
	var edad   = document.getElementById("edad").value;
	var precioEntrada = document.getElementById("precio");
	

	console.info("dia seleccionado: " + dia);
	console.info("Edad: " + edad);
	
	if ((edad > 0) && (!isNaN(edad))) {
		switch (dia) {
		case '1':
			if (edad <= 35) {
				precio = 2;
			} else {
				precio = 5;
			}
			break;
		case '2':
			if (edad <= 25) {
				precio = 2;
			} else if (edad > 25 && edad <= 50) {
				precio = 5;
			} else {
				precio = 7;
			}
			break;
		case '3':
			if (edad <= 18) {
				precio = 3;
			} else if (edad > 18 && edad <= 50) {
				precio = 5;
			} else {
				precio = 8;
			}
			break;
		case '4':
			if (edad <= 18) {
				precio = 5;
			} else {
				precio = 7;
			}
			break;
		case '5':
		case '6':
		case '7':
			precio = 10;
			break;
		default:
			precio = "2";
		}// end switch
	} else {
		precio = "0";
	}
	
	console.info("Precio: " + precio);
	
	precioEntrada.innerHTML = precio +'€';
	return;
}
// end:function calcularEntrada ()

/**
 * Sólo se deja escribir número para la edad
 * 
 * @return true o false
 */
function justNumber(event) {
	return event.charCode >= 48 event.charCode >=57;
	
}

