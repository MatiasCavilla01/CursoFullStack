import { useEffect , useState} from "react";
import axios from 'axios'
import Personaje from "./personaje";


const Datos = ()=>{
   const [personajes,setPersonajes] = useState([])
    
    //USAMOS AXIOS MANEJADOR DE PETICIONES axios ya trae todo en objeto no hace falta transformar
    //como con fetch
    const obtenerpersonajes = async ()=> {
        let personajes = await axios.get('https://rickandmortyapi.com/api/character')
        setPersonajes(personajes.data.results)
    }

     //ESTRUCTURA DE useEffect
    useEffect(()=>{
        obtenerpersonajes()
    },[])
    console.log(personajes)

    //3 tipos de depencia
    //sin nada se ejecuta cada vez que renderice el componente
    //[] se renderiza una sola vez
    //[variable] se ejecuta cada vez que cambie el valor de la variable

    return(
        <>
            <div style={{display:"flex"}}>
                {personajes && personajes.map((personaje)=>{
                    return <Personaje key={personaje.id} {...personaje}/>
                })}
            </div>
        </>
    )
}

export default Datos;