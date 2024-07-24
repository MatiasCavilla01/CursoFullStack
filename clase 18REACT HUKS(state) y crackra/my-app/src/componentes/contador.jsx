import { useState } from "react"
import { Button } from "@chakra-ui/react"

const Contador = ()=>{
    const [contador,setContador] = useState(0)

    const [mostrar,setMostrar] = useState(true)

    const incrementar = ()=>{
        setContador(contador+1)
    }

    const accion = () =>{
        setMostrar(!mostrar)
    }

    return(
        <>
        <h3>soy el contador: {contador}</h3>
        <Button colorScheme='blue'  onClick={incrementar}>incrementar contador</Button>
        <br />
        <button onClick={accion}>{mostrar? 'ocultar msj' :'mostrar msj' }</button>
        {mostrar?<p>soy el msj</p>:<p></p>}
        {/* otra froma corto circuito 
        {mostrar && <p>soy el msj</p>}*/}
        </>
    )
}

export default Contador;