//se encarga de coordinar todo
window.onload = function() {
  var modal = document.getElementById("modal");
  var modalTitulo = document.getElementById("modalTitulo");
  var modalBody = document.getElementById("modalBody");
  var btnCrearCurso = document.getElementById("crearCurso");
  var miInterface = new Interface();
  miInterface.obtenerCursos();
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
                                            <td><input type="text" name="curso_anio"  min="1900" max="2099" step="1" value="2016" class="form-control"></td>
                                        </tr>
                                        <tr>
                                            <td>Docente del Curso:</td>
                                            <td><input type="text" name="curso_docente" class="form-control"></td>
                                        </tr>
                                    </table>
                                    <input type="submit" class="btn btn-primary" value="Crear Curso">
                                </form>`;

    var formulario = $("#formulario");
    console.log(formulario);
    formulario.submit(function(e) {
      
      var dataCurso = formulario.serializeArray();
      var miCurso = new Curso();
      dataCurso.forEach(function(input) {
        miCurso[input.name] = input.value;
        console.log("objeto mi Curso",miCurso);
      });

      miInterface.crearCurso(miCurso,(error) => {
        if(error){
          console.log(error);
        }else{
          miInterface.obtenerCursos();
        }
      });
      e.preventDefault();
    });
  };
};
