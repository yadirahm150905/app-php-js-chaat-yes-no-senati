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
