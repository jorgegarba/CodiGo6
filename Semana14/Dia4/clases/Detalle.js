class Detalle{
    //seteando las propiedades de detalle y el tipo de esas propiedades
    detalle_id = 0;
    detalle_cant = 0;
    detalle_desc = "";
    detalle_punit = 0;

    constructor(det_id,det_cant,det_desc,det_punit){
        this.detalle_id = det_id;
        this.detalle_cant = det_cant;
        this.detalle_desc = det_desc;
        this.detalle_punit = det_punit;
    }
}