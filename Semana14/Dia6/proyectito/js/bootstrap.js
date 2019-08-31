$(document).ready(function() {
    //añadido para la navegación en pestañas
    $('.nav-tabs a[href="#alumnos"]').tab('show')
    $(".nav-tabs a").click(function() {
      $(this).tab("show");
    });
  });