"use stric"
//evita errores sileciosos

//SOLICITUDES
//GET -> OBTENER
//POST -> SUBIR O NEVIAR
// PUT => CAMBIAR
//DELETE => ELIMINAR 

//FETCH(LINK) ES UN OBTENER()GET 
//fetch trae un json hay que convertirlo con .json
fetch('https://rickandmortyapi.com/api/character').then(response => console.log(response.json))


let obtenerDatos = async () =>{
    try{
        let response = await fetch('https://rickandmortyapi.com/api/character')
        .then(response=> response.json())
        .then(data => console.log(data.results))
    }catch{
        console.log('se produjo un error')
    }
}

obtenerDatos()


