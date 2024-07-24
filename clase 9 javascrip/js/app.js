console.log('hola mundo')
let edad = 5

/*operaciones compuestas*/
if(edad>18){
    console.log('Mayor de edad')
} 
else{
    console.log('Menor de Edad')
}

//operador ternario solo se ultiliza en operaciones compuestas(if y else siemples)

edad>18?console.log('Mayor de edad'):console.log('Menor de edad')

//switch solo se puede usar cuando es condiciones ==
//case son las alternativas que tendriacd ..

let palabra = 'dog'
switch(palabra){
    case 'dog':
        console.log('la traduccion es perro')
        break
    case 'table':
        console.log('la traduccion es table')
        break
    default:
        console.log('no se econtro la traduccion')

}