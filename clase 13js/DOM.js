//CIRCUITO CORTO
let Condiciion =true
Condiciion&&console.log('si condiciion es true se imprime el console sino no.')

//DOM DOCUMENT OBJECT MODEL

// let parrafos = document.querySelectorAll('.texto')
let header = document.querySelector('#header')
let titulo = document.querySelector('#titulo')

let resaltarp = () =>{
    let parrafos = document.querySelectorAll('.texto')
    parrafos.forEach(element => {
        element.classList.toggle('estilosp')
    });
}

let agregarp = () =>{
    let nuevop = document.createElement('p')
    nuevop.innerHTML = 'soy el nuevo p'
    nuevop.classList.add('texto')
    header.append(nuevop)

}

let eliminarp = () =>{
    let parrafos = document.querySelectorAll('.texto')
    console.log(parrafos)
    if (parrafos.length > 0){
        let ultimop = parrafos[parrafos.length-1]
        ultimop.parentNode.removeChild(ultimop)
    }
}
let cambiartxt = () =>{
    titulo.innerHTML = '<i>Titulo cambiado </i>'
}