const saludo = "      hola      "
console.log(saludo.trim())
console.log(saludo.trimStart());
console.log(saludo.trimEnd());

const arr = [1, 2, 3, 4, [5, 6, [7, 8, 9]]]
console.log(arr.flat(Infinity))