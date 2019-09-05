const RUTA_BASE = "https://5d4b6adb00dbb10014879b12.mockapi.io/";

class Interface {
  
  obtenerCursos() {
    console.log("obteniendo Curso")
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        console.log("Exito al obtener Cursos");
        var jsonCursos = JSON.parse(xhr.responseText);
        
        var contenidoCursos = document.getElementById("contenidoCursos");
        contenidoCursos.innerHTML = `<thead>
                                        <th>Curso</th>
                                        <th>Descripción</th>
                                        <th>Año</th>
                                        <th>Docente</th>
                                    </thead>`;

        var tbody = document.createElement("tbody");
        contenidoCursos.appendChild(tbody);
        console.log(jsonCursos)
        jsonCursos.forEach(function(curso){
            var tr = document.createElement("tr");

            var tdNombre = document.createElement("td");
            tdNombre.innerHTML = curso.curso_nom;
            tr.appendChild(tdNombre);

            var tdDescripcion = document.createElement("td");
            tdDescripcion.innerHTML = curso.curso_desc;
            tr.appendChild(tdDescripcion);

            var tdAnio = document.createElement("td");
            tdAnio.innerHTML = curso.curso_anio;
            tr.appendChild(tdAnio);

            var tdDocente = document.createElement("td");
            tdDocente.innerHTML = curso.curso_docente;
            tr.appendChild(tdDocente);

            tbody.appendChild(tr);
        })
      }
    };

    xhr.open("GET", `${RUTA_BASE}cursos`);
    xhr.send();
  }
  crearCurso(objCurso,callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 201) {
        console.log("Exito al crear el Curso");
        callback(null,true);
        return;
      }
    };
    
    xhr.open("POST", `${RUTA_BASE}cursos`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(objCurso));



  }
}
