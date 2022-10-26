var par = [0,2,4,6,8]
var impar = [1,3,5,7,9]

var numeros = [...par,...impar]
var numerosOrdenados = []
for (let i = 0; i < ((numeros.length/2)); i++) {
    numerosOrdenados.push(par[i],impar[i])
    
}
console.log(numeros)
console.log(numerosOrdenados)
