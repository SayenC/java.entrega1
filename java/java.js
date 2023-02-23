// const numero1 = parseInt(prompt('ingrese el primer nuero'))
// const numero2 = parseInt(prompt('ingrese el segundo numero'))
// const resultadoTotal = numero1+numero2
// alert(resultadoTotal)

const numero1 = 10
const numero2 = 5
const resultadoTotal = numero1+numero2
console.log(resultadoTotal)


// let numeroA = parseInt(prompt('ingrese un numero'))

// if(numeroA === 6){
//    alert('el numero es 6')
// }   else {
//        alert('el numero no es 6')
// }



let numeroA = parseInt(prompt('ingrese un numero'))

if(numeroA === 6){
    alert('el numero es 6')
}   else {
        alert('el numero no es 6')
}

const ingresarEdad = parseInt(prompt('ingrese su edad'))

if (edad >= 0 &&  edad <= 10){
    alert('niño');

} else if (edad  > 10 &&  edad <= 18){
    alert('adolescente');

} else if (edad  >19 &&   edad <= 80){
    alert(adulto);
    
}else if (edad   > 81 &&   edad <= 100){
    alert('anciano')
}

switch (edad) {
    case edad >=0 && edad<=10:
        alert('es un niño');
        break;
        case edad >=11 && edad<=18:
            alert('es un adolescente');
            break;
        default:
            alert('ingrese la edad correctamente')
        case edad >=19 && edad<=80:
            alert('es un adulto');
            break;
            case edad >=81 && edad<=100:
                alert('es un anciano');
                break;
        }


for(let i =1 ; i<=3; i++){
    i = i+2
    let nombreIngresado = prompt('ingrese su nombre');
    if(nombreIngresado === "Sayen"){
        alert('ha ingresado Sayen')
        continue
    }
    alert('su turno fue registrado, es el nro'+ i)

}



function nombreAIngresar (){
    let nombreIngresado = prompt('ingrese su nombre');
    alert('nombreIngresad');
}
function edadAIngresar (){
    let edadIngresada = prompt('ingrese su edad');
    alert(edadIngresada);
}
function nombreYEdad (){
    let nombreIngresado = prompt('ingrese su nombre');
    alert(nombreIngresado);
    let edadIngresada = prompt('ingrese su edad');
    alert(edadIngresada);
}

edadAIngresar()
nombreYEdad()
nombreAIngresar()