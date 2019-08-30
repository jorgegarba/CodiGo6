//document ready se ejecutará cuando ya este listo el document
$(document).ready(function(){
    $("#listaProductos").DataTable({
        "ajax": {
            type:"GET",
            url:"https://5d4a3aed5c331e00148eaec4.mockapi.io/productos",
            timeout:1500,
            //dataSrc hará que maneje toda la información a partir de un arreglo
            dataSrc:""
        },
        //columns tiene que tener asignado un arreglo con [{data:nombre_del_campo},...]
        "columns":[
            {data:"prod_id"},
            {data:"prod_nom"},
            {data:"prod_desc"},
            {data:"prod_price"},
            {
                data:"prod_img",
                //Con render preprocesaremos los datos para mostrarlo de otra manera,
                //retornando una variable con los datos ya procesados
                render:function(data){
                    let imagen = `<img src="${data}" width="100"/>`;
                    return imagen;
                }
            }
        ],
        //podemos traducir el contenido predeterminado de datatables utilizando
        //un obj "language", mas info https://datatables.net/reference/option/language
        "language":{
            "lengthMenu":"Mostrando _MENU_ items",
            "search": "Buscar: ",
            "info":"Mostrando _START_ a _END_ de _TOTAL_ elementos",
            "paginate": {
                "first":"Inicio",
                "last":"Final",
                "next":"Siguiente",
                "previous":"Anterior"
            },
        }
    })
})