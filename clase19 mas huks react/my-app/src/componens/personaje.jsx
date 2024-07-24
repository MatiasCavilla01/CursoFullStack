import './Personajes.css'

const Personaje = ({image,name,id,species,status})=>{
    return(
        <> 
        <div className="container">
           <img src={image} alt="" />
           <h3>{name}</h3>
           <h4>{id}</h4>
           <h6>{species}</h6>
           <p>{status}</p>
        </div>
        </>
    )
}

export default Personaje;