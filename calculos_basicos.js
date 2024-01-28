let firstNumber = prompt(`Digite o primeiro número`)
let secondNumber = prompt(`Digite o segundo número`)

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

if (firstNumber == secondNumber) {
  alert(`Os dois números inseridos são iguais`)
} else {
  alert(`Os dois números inseridos são diferentes`)
}

const sum = (firstNumber + secondNumber)
const sub = (firstNumber - secondNumber)
const multi = (firstNumber * secondNumber)
const div = (firstNumber / secondNumber)
const restDiv = (firstNumber % secondNumber)

alert(`A soma dos dois números é: ${sum}`)

if (sum % 2 === 0 ) {
  alert(`O resultado da soma é um número par`)
} else {
  alert(`O resultado da soma é um número impar`)
}

alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${multi}`)
alert(`A divisão dos dois números é: ${div}`)
alert(`O resto da divisão: ${restDiv}`)
