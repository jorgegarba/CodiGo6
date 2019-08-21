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

    // focus, cuando el cursor se encuentra sobre el elemento 
    $("#inputBuscar").focus(function () {
        $(this).removeClass("form-control");
        $(this).addClass("barra-activa");
    });
    // blur, cuando el cursor libera o sale del elemento
    $("#inputBuscar").blur(function () {
        $(this).removeClass("barra-activa");
        $(this).addClass("form-control");
    });

    // contextmenu => evento que se dispara cuando hacemos click
    // derecho en un elemento
    $("#btnRon").contextmenu(function (e) {
        e.preventDefault();
        // remove => quita un elemento del DOM
        $("#miMenu").remove();
        var X = e.clientX;
        var Y = e.clientY;
        // creando el elemento ul que sera el menu
        var menu = $(`<ul></ul>`);
        // attr => asigna el valor de un atributo
        menu.attr("id", "miMenu");
        menu.addClass("list-group");
        // creando una opcion (li) para el elemento ul
        var opcion1 = $(`<li></li>`);
        opcion1.addClass("list-group-item");
        opcion1.html("Ocultar");
        // creando una opcion (l1) para el elemento ul
        var opcionImprimir = $(`<li></li>`);
        opcionImprimir.addClass("list-group-item");
        opcionImprimir.html("Imprimir");
        // asignando el evento click del boton imprimir
        opcionImprimir.click(function () {
            $("#miMenu").remove();
            window.print();
        })

        // inyectando el elemento li al elemento ul
        menu.append(opcion1);
        menu.append(opcionImprimir);
        menu.css("position", "absolute")
            .css("top", `${Y}px`)
            .css("left", `${X}px`);

        $("body").append(menu);



        // <ul class="list-group">
        //     <li class="list-group-item active">Active item</li>
        //     <li class="list-group-item">Item</li>
        //     <li class="list-group-item disabled">Disabled item</li>
        // </ul>





        console.log("se hizo click derecho!");
    })





    reset();
}