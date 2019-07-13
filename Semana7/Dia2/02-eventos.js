window.onload = function(){
    var input = document.getElementById("inputCorreo");
    var captcha = document.getElementById("captcha");
    var imagen = document.getElementById("imagen");
    //es preferible que usemos onkeyUp ya que nos devuelve
    //todo el valor ya que considera la tecla presionada
    input.onkeyup = function(e){
        console.log("una tecla ha sido pulsada");
        console.log("tecla pulsada: " + e.key);
        console.log("código de tecla: " + e.keyCode);
        console.log("keyCode transformado: " + String.fromCharCode(e.keyCode));
        console.log(this.value);
    }
    input.onkeypress = function(e){
        console.log("onkeypress: " + this.value);
    }
    
    captcha.ondblclick = function(){
        imagen.style.filter = "grayscale(100%)";
        imagen.style.border = "2px solid red";
    }

    var comidaCasera = ['Lentejitas','Cordero','Saltado','Aji de Gallina'];

    var comidaRapida = ['Salchipapa','Empanada','Papa Rellena','Burguer'];

    var Piqueos = ['Papitas','Chocolates','Galletas'];

    var selectComida = document.getElementById("comida");
    var selectTipo = document.getElementById("tipocomida");
    selectComida.onchange = function(){
        selectTipo.removeAttribute("disabled");
        selectTipo.innerHTML = "";
        // if(selectComida.value)
        //Con esto evaluamos el valor de selectComida para asegurarnos que de verdad haya una opción seleccionada
        if(this.value != 0){
            switch(this.value){
                case 'ff':
                    for(var i=0;i<comidaRapida.length;i++){
                        //creamos un elemento en cada iteración
                        var opcion = document.createElement("option");
                        //como contenido tendrá el valor del arreglo en el que este
                        opcion.innerHTML = `${comidaRapida[i]}`;
            //Con charAt setearemos su valor con la primera letra del valor del arreglo según la iteración
                        opcion.setAttribute("value",comidaRapida[i].charAt(0));
                        //y lo añadimos como hijo del select 
                        selectTipo.appendChild(opcion);
                    }
                break; 
                case 'cc':
                    for(var i=0;i<comidaCasera.length;i++){
                        var opcion = document.createElement("option");
                        opcion.innerHTML = `${comidaCasera[i]}`;
                        opcion.setAttribute("value",comidaCasera[i].charAt(0));
                        selectTipo.appendChild(opcion);
                    } 
                break;  
            }
        }
    }
}