let user = 'pepe'
let password = 'hola123'

let patrontxt = /'hola'/

if (patrontxt.test(user)){
    console.log('contiene el texto')
}
else{
    console.log('no contiene el txt')
}

//un numero del 1 al 9 y que sean 3 numeros nda mas
let patronnum = /[0-9]{3}/

if (patronnum.test(user)){
    console.log('contiene 3 numeros')
}
else{
    console.log('no contiene ')
}

//inicia con hola
let patronInicio = /^hola/

//termina con hola
let patronFinal = /hola$/

//comienza con caracter alfanumerico y termina con alfanumerico
let patronInicialAlfa = /^[a-zA-Z]$/

let patronPatente = /^[A-Z]{2}[0-9]{3}[A-Z]{3}$/