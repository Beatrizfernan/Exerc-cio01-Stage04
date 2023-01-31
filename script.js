let number1 = prompt("Ensira um número")
let number2 = prompt("Ensira outro número")


let Addition = (Number(number1) + Number(number2))
alert("A soma dos dois números é: " + Addition)


let Subtraction = (Number(number1) - Number(number2))
alert("A subtração dos dois números é: " + Subtraction)


let Multiplication = (Number(number1) * Number(number2))
alert("A multiplicação dos dois números é: " + Multiplication)

let Division = (Number(number1) / Number(number2))
alert("A divisão dos dois números é: " + Division)


let restOfDivision = (Number(number1) % Number(number2))
alert("O resto da divisão dos dois números é: " + restOfDivision)


let Numbereven = restOfDivision == 0
if (Numbereven) {
    alert(" a soma dos dois números é par")
} else {
    alert("a soma dos dois números é impar")
}


let NumbersEqual = (number1 == number2)
if (NumbersEqual) {
    alert("Os dois números inseridos são iguais")
} else {
    alert("Os dois números inseridos são diferentes")
}
