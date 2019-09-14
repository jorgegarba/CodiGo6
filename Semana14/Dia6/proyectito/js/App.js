//se encarga de coordinar todo
window.onload = function() {
  var modal = document.getElementById("modal");
  var modalTitulo = document.getElementById("modalTitulo");
  var modalBody = document.getElementById("modalBody");
  var btnCrearCurso = document.getElementById("crearCurso");
  var btnCrearAlumno = document.getElementById("crearAlumno");
  var miInterface = new Interface();

  function imprimirBotones() {
    var botonesCursos = document.querySelectorAll(".admincursos");

    console.log("dsaf", botonesCursos);
    botonesCursos.forEach(function(boton) {
      let idCurso = boton.getAttribute("id");
      boton.onclick = function() {
        modalTitulo.innerHTML = "Gestionar Cursos";
        modalBody.innerHTML = `<table class="table">
                              <thead>
                                <tr>
                                  <th>Nombre Alumno</th>
                                  <th>Marcar para añadir</th>
                                </tr>
                              </thead>
                            </table>`;
        miInterface.obtenerAlumnosModal(function() {
          var checks = document.querySelectorAll(".checks");
          console.log("check",checks);
          let miCurso = new Curso();
          checks.forEach(function(check){
            check.onclick = function(){
              
              if(check.checked == true){
                let idAlumno = check.getAttribute("idalumno");
                
                miInterface.obtenerCurso(idCurso,function(objCurso){
                  
                  Object.assign(miCurso, objCurso);
                  miInterface.obtenerAlumno(idAlumno,function(objAlumno){
                    miCurso.anadirAlumnos(objAlumno.alum_id);
                    console.log(miCurso)
                  });
                });
                
                
              }else{
                  
              }
            }
          })
        });
      };
    });
  }

  miInterface.obtenerCursos(function() {
    imprimirBotones();
  });

  miInterface.obtenerAlumnos();

  btnCrearAlumno.onclick = function(e) {
    e.preventDefault();
    modalTitulo.innerHTML = "Crear Alumno";
    modalBody.innerHTML = `<form id="formulario">
                                    <table class="table">
                                        <tr>
                                            <td>Nombre del Alumno:</td>
                                            <td><input type="text" name="alum_nom" class="form-control"></td>
                                        </tr>
                                        <tr>
                                            <td>Apellidos del Alumno:</td>
                                            <td><input type="text" name="alum_apell" class="form-control"></td>
                                        </tr>
                                        <tr>
                                            <td>DNI del alumno:</td>
                                            <td><input type="number" name="alum_dni" step="1" value="" class="form-control"></td>
                                        </tr>
    
                                    </table>
                                    <input type="submit" class="btn btn-primary" value="Crear Alumno">
                                </form>`;
    var formulario = $("#formulario");
    console.log(formulario);
    formulario.submit(function(e) {
      e.preventDefault();
      var dataAlumno = formulario.serializeArray();
      var miAlumno = new Alumno();
      dataAlumno.forEach(function(input) {
        miAlumno[input.name] = input.value;
      });
      console.log(miAlumno);
      miInterface.crearAlumno(miAlumno, () => {
        console.log("alumno creado");
        miInterface.obtenerAlumnos();
      });
      $("#modal").modal("hide");
    });
  };

  btnCrearCurso.onclick = function(e) {
    e.preventDefault();
    modalTitulo.innerHTML = "Crear Curso";
    modalBody.innerHTML = `<form id="formulario">
                                    <table class="table">
                                        <tr>
                                            <td>Nombre del Curso:</td>
                                            <td><input type="text" name="curso_nom" class="form-control"></td>
                                        </tr>
                                        <tr>
                                            <td>Descripción del Curso:</td>
                                            <td><input type="text" name="curso_desc" class="form-control"></td>
                                        </tr>
                                        <tr>
                                            <td>Año del Curso:</td>
                                            <td><input type="number" name="curso_anio"  min="1900" max="2099" step="1" value="2016" class="form-control"></td>
                                        </tr>
                                        <tr>
                                            <td>Docente del Curso:</td>
                                            <td><input type="text" name="curso_docente" class="form-control"></td>
                                        </tr>
                                    </table>
                                    <input type="submit" class="btn btn-primary" value="Crear Curso">
                                </form>`;

    let formulario = $("#formulario");
    console.log(formulario);
    formulario.submit(function(e) {
      let dataCurso = formulario.serializeArray();
      let miCurso = new Curso();
      dataCurso.forEach(function(input) {
        miCurso[input.name] = input.value;
        console.log("objeto mi Curso", miCurso);
      });

      miInterface.crearCurso(miCurso, error => {
        if (error) {
          console.log(error);
        } else {
          miInterface.obtenerCursos(function() {
            imprimirCursos();
          });
        }
      });
      e.preventDefault();
      $("#modal").modal("hide");
    });
  };
};
