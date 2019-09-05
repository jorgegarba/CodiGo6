window.onload = () => {
    let traerGatos = () => {
        return new Promise((resolve,reject)=>{
            //va nuestro código asincrono
            $.ajax({
                type:"GET",
                url:"https://5d4b6adb00dbb10014879b12.mockapi.io/gatos"
            });
        });
    }
}