const RUTA_BASE = "https://5d4b6adb00dbb10014879b12.mockapi.io/";

class Interface {
  obtenerCursos(callback) {
    console.log("obteniendo Curso");
    let xhr = new XMLHttpRequest();
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
                                        <th>Agregar Alumno</th>
                                    </thead>`;

        var tbody = document.createElement("tbody");
        contenidoCursos.appendChild(tbody);
        console.log(jsonCursos);
        jsonCursos.forEach(function(curso) {
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

          var tdAlumnos = document.createElement("td");
          var btnAlumnos = document.createElement("button");
          btnAlumnos.setAttribute("id", curso.curso_id);
          btnAlumnos.setAttribute("data-toggle", "modal");
          btnAlumnos.setAttribute("data-target", "#modal");
          btnAlumnos.innerHTML = "Editar";
          btnAlumnos.className = "btn btn-primary admincursos";
          tdAlumnos.appendChild(btnAlumnos);
          tr.appendChild(tdAlumnos);

          tbody.appendChild(tr);
        });
        callback();
      }
    };

    xhr.open("GET", `${RUTA_BASE}cursos`);
    xhr.send();
  }

  obtenerAlumnos() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        
        var jsonAlumnos = JSON.parse(xhr.responseText);

        var contenidoAlumnos = document.getElementById("contenidoAlumnos");
        contenidoAlumnos.innerHTML = `<thead>
                                        <th>Nombres</th>
                                        <th>Apellidos</th>
                                        <th>DNI</th>
                                      </thead>`;

        var tbody = document.createElement("tbody");
        contenidoAlumnos.appendChild(tbody);
        console.log(jsonAlumnos);
        jsonAlumnos.forEach(function(alumno) {
          var tr = document.createElement("tr");

          var tdNombres = document.createElement("td");
          tdNombres.innerHTML = alumno.alum_nom;
          tr.appendChild(tdNombres);

          var tdApellidos = document.createElement("td");
          tdApellidos.innerHTML = alumno.alum_apell;
          tr.appendChild(tdApellidos);

          var tdDni = document.createElement("td");
          tdDni.innerHTML = alumno.alum_dni;
          tr.appendChild(tdDni);

          tbody.appendChild(tr);
        });
      }
    };

    xhr.open("GET", `${RUTA_BASE}alumnos`);
    xhr.send();
  }

  crearCurso(objCurso, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status == 201) {
        console.log("Exito al crear el Curso");
        callback(null, true);
        return;
      }
    };

    xhr.open("POST", `${RUTA_BASE}cursos`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(objCurso));
  }

  crearAlumno(objAlumno, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status == 201) {
        console.log("Exito al crear el Alumno");
        callback(null);
        return;
      }
    };

    xhr.open("POST", `${RUTA_BASE}alumnos`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(objAlumno));
  }

  obtenerAlumnosModal(callback) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonAlumnos = JSON.parse(xhr.responseText);
        var tabla = document.createElement("table");
        tabla.className = "table";
        var contenidoAlumnos = document.getElementById("modalBody");

        var tbody = document.createElement("tbody");
        contenidoAlumnos.appendChild(tbody);
        console.log(jsonAlumnos);
        jsonAlumnos.forEach(function(alumno) {
          var tr = document.createElement("tr");

          var tdNombres = document.createElement("td");
          tdNombres.innerHTML = `${alumno.alum_nom} ${alumno.alum_apell}`;
          tr.appendChild(tdNombres);

          var tdCheck = document.createElement("td")
          var inputCheck = document.createElement("input");
          inputCheck.setAttribute("type","checkbox");
          inputCheck.setAttribute("idalumno",alumno.alum_id);
          inputCheck.className = "form-control checks";
          tdCheck.appendChild(inputCheck);
          tr.appendChild(tdCheck);

          tbody.appendChild(tr);
          tabla.appendChild(tbody);
          contenidoAlumnos.appendChild(tabla);
          
        });
        callback();
      }
    };
    
    xhr.open("GET", `${RUTA_BASE}alumnos`);
    xhr.send();
  }

  obtenerAlumno(id,callback){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4){
        var jsonAlumno = JSON.parse(xhr.responseText);
        callback(jsonAlumno);
      }
    }

    xhr.open("GET", `${RUTA_BASE}alumnos/${id}`);
    xhr.send();
  }

  obtenerCurso(id,callback){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4){
        var jsonCurso = JSON.parse(xhr.responseText);
        callback(jsonCurso);
      }
    }

    xhr.open("GET", `${RUTA_BASE}cursos/${id}`);
    xhr.send();
  }

}

