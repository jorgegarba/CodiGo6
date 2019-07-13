window.onload = function(){

    var form = document.getElementById("formulario");
    var input = document.getElementById("inputTarea");
    var list = document.getElementById("lista");

    function obtener(){
        //obtenemos misTareas desde el localStorage
        var tareasObtenidas = localStorage.getItem("misTareas");
        //y el contenido lo incrustamos dentro de list que es nuestro <ul></ul>
        list.innerHTML = tareasObtenidas;
    }
    obtener();

    function guardar(){
        //En vez de utilizar setItem("nombreItem","contenido")
        //guardaremos de la sgte manera
        //localstorare.nombreItem = "contenidoItem";
        // console.log(list.innerHTML);
        // localStorage.setItem("misTareas",list.innerHTML);
        localStorage.misTareas = list.innerHTML;
    }

    form.addEventListener("submit",function(e){
        e.preventDefault();
        var tarea = input.value;
        // console.log(tarea);
        var li = document.createElement("li");
        li.innerHTML = tarea;
        list.appendChild(li);
        input.value = "";
        guardar();
    });

    list.addEventListener("dblclick",function(e){
        //e.target nos imprmirá el elemento al que le hemos hecho doble click;
        var tarea = e.target;
        // console.log(tarea);
        // console.log(tarea.parentNode);
        //parentNode hará referencia al nodo Padre
        //parentNode removeChild removerá al nodo hijo
        tarea.parentNode.removeChild(tarea);
        guardar();
    });
}



