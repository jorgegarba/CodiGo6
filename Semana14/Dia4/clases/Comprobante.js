//https://developer.mozilla.org/es/docs/Web/JavaScript/Introducci%C3%B3n_a_JavaScript_orientado_a_objetos
class Comprobante{
    //definimos las propiedades y sus tipos
    comprobante_id = 0;
    comprobante_fecha = new Date();
    comprobante_total = 0;
    comprobante_detalle = [];

    /**
     * @param  {} comp_id numero de id
     * @param  {} comp_fecha nueva fecha
     */
    
    constructor(comp_id,comp_fecha){
        this.comprobante_id = comp_id;
        this.comprobante_fecha = comp_fecha;
    }
    /**
     * @param  {} objProducto representará un producto que se añadira a comprobante_Detalle
     */
    anadirDetalle(objProducto){
        //objDetalle será un objeto, porque puede contener varios campos, id, nombre_prod, precio_unitario, descripción
        this.comprobante_detalle.push(objProducto);
    }

    mostrarFechaComprobante(){
        console.log(this.comprobante_fecha);
    }

    mostrarComprobante(){
        console.log("Resumen comprobante:",this);
    }

    calcularSubTotal(cantidad,prec_unit){
        return cantidad*prec_unit;
    }
}


