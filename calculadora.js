function somar (a,b){return a+b}
function subtrair (a,b){return a-b}
function dividir (a,b){return a/b}
function multiplicar (a,b) {return a*b}

//(12 + 8) * 3 - 10 / 2

const resultadoSoma = somar(12,8)
console.log(resultadoSoma)
const resultadoMult = multiplicar(resultadoSoma,3)
console.log(resultadoMult)
const resultadoDiv = dividir(10,2)
const resultadoFinal = subtrair(resultadoMult, resultadoDiv)
console.log(resultadoFinal);