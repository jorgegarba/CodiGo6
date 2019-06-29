// {
//     id: 1,
//     nro: 1,
//     precio: 5000,
//     estado: "disponible"
// },
function Pabellon(nuevoNombre="Sin Nombre",nuevoFilas,nuevoColumnas,nuevoId) {
    
    var objPabellon = {
        nombre: nuevoNombre,
        capacidad: nuevoFilas*nuevoColumnas,
        nro_filas: nuevoFilas,
        nro_col: nuevoColumnas,
        id: nuevoId,
        nichos: [{
            id: 1,
            nro: 1,
            precio: 5000,
            estado: "libre"
        },{
            id: 1,
            nro: 1,
            precio: 5000,
            estado: "disponible"
        },{
            id: 1,
            nro: 1,
            precio: 5000,
            estado: "libre"
        },],
        venderNicho:function(idNicho){
            for(var i = 0; i < this.nichos.length; i++){
                if(this.nichos[i].id == idNicho){
                    if(this.nichos[i].estado === "libre"){
                        this.nichos[i].estado = "ocupado";
                        console.log("Hecho!, El nicho se ha vendido correctamente");
                    }else{
                        console.log("Error!, este nicho no se puede vender");
                    }
                    break;
                }
            }
        },
        liberarPabellon: function(){
            this.nichos = [];
        },
        repoblarPabellon:function(){
            // 1. limpiar todos los nichos o borrarlos
            this.liberarPabellon();
            // 2. crear [CAPACIDAD] nichos
            for(var i=0; i<this.capacidad; i++){
                // RETO> Crear el objeto nicho 
                // a partir de una clase constructora
                // es decir una función
                // var objNicho = Nicho(0,"libre",i+1,i+1);
                var objNicho = {
                    precio: 0,
                    estado:"libre",
                    id:i+1,
                    nro:i+1
                }
                this.nichos.push(objNicho);
            }
        },
        consultarNichosLibres: function(){
            var nichosLibres = 0;
            // 1.recorrer el arreglo de nichos
            for(var i=0; i<this.nichos.length; i++){
                if(this.nichos[i].estado == "libre"){
                    nichosLibres = nichosLibres + 1;
                }
            }
            console.log(`Nichos libres del pabellon ${this.nombre}=> ${nichosLibres}`);
            // 2.preguntar si el nicho esta libre
            // 3. si el el nicho esta libre
            // contar el nicho libre
            // 4. al final de recorrer los nichos
            // mostrar la cantidad contada
        },
        
    }
    return objPabellon;

}

var pabellonSanJorge = Pabellon("San Jorge",5,4,1);
var pabellonSanFelipe = Pabellon("San Felipe",10,10,2);

pabellonSanFelipe.repoblarPabellon();
pabellonSanFelipe.consultarNichosLibres();

pabellonSanJorge.repoblarPabellon();
pabellonSanJorge.consultarNichosLibres();

pabellonSanFelipe.venderNicho(5);
pabellonSanFelipe.venderNicho(50);
pabellonSanFelipe.venderNicho(45);
pabellonSanFelipe.venderNicho(35);
pabellonSanFelipe.venderNicho(15);
pabellonSanFelipe.venderNicho(50);

pabellonSanFelipe.consultarNichosLibres();







// Desarrollar las siguientes funciones

// - venderNicho(idNicho) =>  La funcion, mostrará un mensaje por
// consola, de "Nicho vendido" tras cambiar su estado a "ocupado"
// Si el nicho estaba ocupado, el sistema, deberá mostrar
// un mensaje de error indicando que el nicho no se puede vender.

// - consultarNichosLibres() => La función retornará la cantidad
// de nichos en estado "libre"

// - liberarPabellon() => La función borrará todos los nichos del
// pabellon(limpiará el arreglo de nichos)

// - repoblarPabellon() => la función, primero llamará a la función
// liberarPabellon(), luego creará tantos nichos como
// capacidad tenga el pabellon, con valores por defecto para cada
// nicho. OJO > el número y el id del nicho, deben ser valores
// correlativos, el precio inciará en 0 y todos los estados serán
// "libre"