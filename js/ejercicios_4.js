let age = prompt('Enter your age')
let num = parseInt(age)
let fal = 18-num
switch(true){
    case age >= 18:
    console.log('You are old enought to drive ')
    break
    
    case age < 18:
    console.log(`You are left with ${fal} years to drive`)
}

/*Compara los valores de myAge y yourAge usando if... else. Según la comparación, registre el
resultado en la consola indicando quién es mayor (tú o yo). Utilice prompt(“Ingrese su edad:”) para
obtener la edad como entrada.
*/

let Myage = prompt('Ingrese su edad:')   
let yourage =prompt('Ingresa La edad:')
if (Myage > yourage){
    console.log(`yo soy mayor que tu por ${Myage - yourage} años`)
}else if (Myage<yourage){
    console.log(`Tu eres mayor que yo por ${yourage - Myage} años`)
}else
console.log('Tenemos la misma edad')

/*- Si a es mayor que b, devuelve 'a es mayor que b'; de lo contrario, 'a es menor que b'. Trate de
implementarlo de maneras diferentes
● Usando if else
● operador ternario.
*/

//Usando el if else

let A = 4
let B = 3
if (A > B ){
    console.log(`${A} es mayor que ${B}`)
}else{
    console.log(`${A} es menor que ${B}`)
}

//Operador ternario 
let a = 4
let b =  3
let resultado = a > b 
    ? console.log(`${a} es mayor que ${b}`)
    : console.log(`${a} es menor que ${b}`)

/*
4.- Consulta si la temporada es Otoño, Invierno, Primavera o Verano. Si la entrada del usuario es :
● Septiembre, Octubre o Noviembre, la temporada es Otoño.
● Diciembre, Enero o Febrero, la temporada es Invierno.
● Marzo, Abril o Mayo, la temporada es Primavera
● Junio, Julio o Agosto, la temporada es Verano
*/

let mes = prompt('Ingresa el mes')
let temporada = mes.toLocaleLowerCase()
switch(temporada){
    case 'septiembre':
    console.log('la temporada es Otoño')
    break

    case 'octubre':
    console.log('la temporada es Otoño')
    break

    case 'noviembre':
    console.log('la temporada es Otoño')
    break
    
    case 'diciembre':
    console.log('la temporada es Invierno')
    break
    
    case 'enero':
    console.log('la temporada es Invierno')
    break

    case 'febrero':
    console.log('la temporada es Invierno')
    break

    case 'marzo':
    console.log('la temporada es Primavera')
    break

    case 'abril':
    console.log('la temporada es Primavera')
    break

    case 'mayo':
    console.log('la temporada es Primavera')
    break

    case 'junio':
    console.log('la temporada es Verano')
    break

    case 'julio':
    console.log('la temporada es Verano')
    break

    case 'agosto':
    console.log('la temporada es Verano')
    break
    default:
    console.log('No existe esa temporada para ese mes')
}   

/*
- Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:
● 80-100, A
● 70-89, B
● 60-69, C
● 50-59, D
● 0-49, F
*/

let cal = prompt('Ingresa tu calificacio')

if(cal >= 80 && cal <= 100){
    console.log('Tu calificacion es A')
}else if (cal >= 70 && cal <= 79){
    console.log('Tu calificacion es B')
}else if (cal >= 60 && cal <= 69){
    console.log('Tu calificacion es C')
}else if (cal >= 50 && cal <= 59){
    console.log('Tu calificacion es D')
}else if (cal >= 0 && cal <= 49){
    console.log('Tu calificacion es F')
}else{
    console.log('Ingrese su calificacion por favor')
}
