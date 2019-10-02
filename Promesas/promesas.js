
let setFactura = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      facturas = ["primera", "segunda", "tercera"];
      resolve(facturas);
    }, 2000);
  })
}

let primeraFactura = (facturas) => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(facturas[0]);
    }, 1000)
  })

}

let tramitador = async () => {
  let f = await setFactura();
  let primera = await primeraFactura(f);
  console.log(primera);
}

tramitador();






