/**Funcion para mostrar y ocultar los divs*/
var mostrar = function(id_mostrar) {
    console.log("parametro: ", id_mostrar);
    var tabla_servicios = document.getElementById('div_tabla_servicios'); 
    var tabla_combos = document.getElementById('div_tabla_combos');
    var form_servicio = document.getElementById('div_form_crear_servicio');
    var form_combo = document.getElementById('div_form_crear_combo');
    /**crea una variable con la lista de los divs*/
    var divs = [tabla_servicios, tabla_combos, form_servicio, form_combo];
    console.log("mostrar divs", divs);
    for (var i=0; i<divs.length; i++) {
        console.log("mostrar i", i); 
        if (divs[i].id === id_mostrar) {
            divs[i].style.display = '';
        }
        else {
            divs[i].style.display = 'none';
        }
    }
}

//El array servicios contiene los 3 servicios iniciales
var servicios = [["1", "Manicura Normal", "4500", "Resina", "No", "Sí", "img/servicios/img1.jpg"],
["2", "Manicura Express", "6500", "Plástico", "Si", "Si", "img/servicios/img2.jpg"],
["3", "Manicura Profesional", "9000", "Natural", "Si", "No", "img/servicios/img3.jpg"]] 

// Esta funcion carga los servicios iniciales
function cargarServicios(arrays) {
    var tabla = document.getElementById('servicios'); //referencia a la tabla que contendra los servicios
    //Recorre cada servicio contenido en el arreglo de servicios iniciales (for)
    for (var i = 0; i<arrays.legth; i++) {
        var fila = document.createElement('tr'); //crea una fila nueva en cada entrada al ciclo for
        //recorre cada servicio contenido en el arrglo de servicios iniciales
        for (var j = 0; j<arrays[i].leght; j++) {
            var celda = document.createElement('td') //Crea una celda para cada elemento del array
            celda.appendChild(document.createTextNode(arrays[i][j]));
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
}
