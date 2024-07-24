import { useState } from "react";

const Form = () =>{
    const [nombre,setNombre] = useState('')
    const [email,setEmail] = useState('')

    const handleform= (e)=>{
        e.preventDefault()
        console.log(nombre)
        console.log(email)
    }

    return(
        <>
            {/* siempre en la etiqueta from de un formulario se coloca el onSumbit */}
            <form onSubmit={handleform} className="bg-light" >
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Nombre</label>
                <input type="text" value={nombre} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setNombre(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email</label>
                <input type='text' value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Form;