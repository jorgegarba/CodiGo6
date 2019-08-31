function Auto(placa, color,marca){
        this.placa = placa;
        this.color = color;
        this.marca = marca
    }
    
    var camioneta = new Auto("EH-4548","Rojo","Hyundai");
    
    Auto.prototype.resumen = function(){
        console.log("Este auto de marca :" + this.marca + " de color " + this.color );
    };
    
    console.log(camioneta);

    // var texto = "hola";

   
    