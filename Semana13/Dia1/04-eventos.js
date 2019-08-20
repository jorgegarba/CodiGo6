window.onload = function () {

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
    })

    function reset() {
        $("#listaWhisky, #listaRon").hide();
        $("#btnWhisky, #btnRon").removeClass("activo");
    }

    $("#btnWhisky").click(function () {
        reset();
        $("#listaWhisky").show();
        $(this).addClass("activo");
    });

    $("#btnRon").click(function () {
        reset();
        $("#listaRon").show();
        $(this).addClass("activo");
    });


    $(".producto").dblclick(function () {
        Toast.fire({
            type: 'success',
            title: "Agregado  al carrito " + $(this).text()
        })
    });

    // cuando el mouse esté encima del elemento
    // $("#imagen").mouseover(function () {
    //     $(this).addClass("rounded-circle");
    // });
    // cuando el mouse salga o se libere del elemento 
    // $("#imagen").mouseout(function () {
    //     $(this).removeClass("rounded-circle");
    // });


    // funcion hover > combina mouseover y mouseout
    $("#imagen").hover(function () {
        $(this).addClass("rounded-circle");
    }, function () {
        $(this).removeClass("rounded-circle");
    });



    reset();
}