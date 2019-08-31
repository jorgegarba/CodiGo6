class Factura extends Comprobante {
    factura_igv_porcentaje = 0;
    factura_igv_total = 0;
    /**
     * add jsdoc comments - extensión
     * @param  {} comp_id es un numero
     * @param  {} comp_fecha esfecha
     * @param  {} fact_igv igv que usualmente el 18%
     */
    constructor(comp_id,comp_fecha,fact_igv){
        //accedemos al constructor de Comprobante y setearemos sus propiedades
        super(comp_id,comp_fecha);
        this.factura_igv_porcentaje = fact_igv;
    }
    
    /**
     * Este método calculará tanto el total del comprobante como 
     * el total del igv
     */
    recalculo(){
        let total = 0;
        
        //iterará por cada producto
        for(let i   = 0; i < this.comprobante_detalle.length; i++){

            let cantidad = this.comprobante_detalle[i].detalle_cant;
            let precio_unit = this.comprobante_detalle[i].detalle_punit;
            

            total += this.calcularSubTotal(cantidad,precio_unit);
            // total = total + this.calcularSubTotal(cantidad,precio_unit);
            
        }
     
        this.factura_igv_total = total * this.factura_igv_porcentaje / 100;
       
        this.comprobante_total = total;
       
    }
}
