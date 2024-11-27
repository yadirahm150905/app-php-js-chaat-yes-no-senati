<?php
//nombre: YADIRA YAHAIRA HUAMAN MEZA

header("Access-Control-Allow-Origin: *");

$metodo = $_SERVER['REQUEST_METHOD'];

$respuesta =[];
switch ($metodo) {
    case 'GET':
        $respuesta =[
        'mensaje'=>'Metodo Get Correcto ',       
        'data'=> $_GET
    ];# code...

        break;
    
    case 'POST':
     $data_entrante = json_decode(file_get_contents("php://input"),true);  // json_encode( => convertir en json      json_decode=> convertir a array     ->el codigo captura la data body

        $respuesta =[
        'mensaje'=>'Metodo POST de retorno ',       
        'data'=> $data_entrante,

    ];# code...
    
    default:
        # code...
        break;
}

echo json_encode($respuesta);

//////////////////////////////////////////////////////

// nombre: YADIRA YAHAIRA HUAMAN MEZA

header("Access-Control-Allow-Origin: *");

$metodo1 = $_SERVER['REQUEST_METHOD'];

$respuesta1 =[];
switch ($metodo1) {
    case 'GET':
        $respuesta =[
        'mensaje'=>'Metodo Get Correcto ',       
        'data'=> $_GET
    ];# code...

        break;
}
echo json_encode($respuesta);

