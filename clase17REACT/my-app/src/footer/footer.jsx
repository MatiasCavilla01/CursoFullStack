// import PropTypes from 'prop-types'

const Footer = ({user}) => {
    const {name,lastname,age,carrera} = user
    return(
        <>
            <h1>{name}</h1>
            <h2>{lastname}</h2>
            <p>{age}</p>
            <p>{carrera}</p>
        </>
    )

}

// Footer.PropTypes={
//     title:PropTypes.string.isRequired
// }

export  default Footer;