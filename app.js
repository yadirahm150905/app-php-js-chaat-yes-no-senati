/*const apiUrl = "http://localhost/app-php-js-chaat-yes-no-senati/api.php"

function getData() {
    console.log('Ingreso al get Data')
try {
    const respuesta = await ;fetch (`$(apiUrl)?id=123Nombre=Yadira&apellido=HuamanMeza`,{
        method: 'GET',
    });

    const data = await ; respuesta.json();
    console.log(data);
} catch (error) {
    console.log ("Error al momento d ehacer la peticion GET:" , error)
}

}

let botonGet = document.getSelection('#getdata');
botonGet.addEventListener('click',function() {
  getData();

});
*/
// Nombre: YADIRA YAHAIRA HUAMAN MEZA
const apiUrl = "http://localhost/app-php-js-chaat-yes-no-senati/api.php";

async function getData() {
    console.log('Ingreso al get Data');
    try {
        const respuesta = await fetch(`${apiUrl}?id=123&nombre=Yadira&apellido=HuamanMeza`, {
            method: 'GET',
        });

        const data = await respuesta.json();
        console.log(data);
    } catch (error) {
        console.log("Error al momento de hacer la petición GET:", error);
    }
}

let botonGet = document.querySelector('#getdata'); // Cambié getSelection por querySelector
botonGet.addEventListener('click', function () {
    getData();
});

async function postData() {
    console.log('Ingreso al POST Data');
    try {
        const  respuesta = await fetch(apiUrl, {
             method: 'POST',
             headers:{
                "Content-Type": "application/json"
             },
             body: JSON.stringify({
                nombre:'Yadira',
                apellido:'Huaman',
                lenguaje_favorito: 'JavaScript',
                color : 'rojo'
             })            
             
        });
const data_retorna = await respuesta.json();
console.log(data_retorna);

    } catch (error) {
        console.log("Error al momento de hacer la peticon POST:",error);
    }
    //alert('ingresoaquiiiiiiiiiiiiii')
}
//////////////////////////////////////////////////////////////////////////////////////////////

let botonPost = document.querySelector('#post-data');
botonPost.addEventListener('click', function() {
    postData();
//alert ('ingreso aquiii');


});


//apuntado a la url 
//con get a 
//https://yesno.wtf/api

//nombre :Yadira Yahaira Huaman Meza

const apiUrl2 = "https://yesno.wtf/api";

async function getData() {
    console.log('Ingreso al get Data');
    try {
        const respuesta = await fetch(apiUrl2, {
            method: 'GET',
        });

        const data = await respuesta.json();
        console.log(data);
    } catch (error) {
        console.log("Error al momento de hacer la petición GET:", error);
    }
}

let botonGet2 = document.querySelector('#getURL'); 
botonGet2.addEventListener('click', function () {
    getData();
});