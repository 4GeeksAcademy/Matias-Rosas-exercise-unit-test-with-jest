const sum = (a,b) => {
    return a + b;
}

console.log(sum(7,3))

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar) {
    let valueinYen = valueInDollar * 156.5
    return valueinYen
}

const fromYenToPound = function(valueinYen) {
    let valueinPound = valueinYen * 0.87
    return valueinPound
}

module.exports = {sum, fromEuroToDollar,fromDollarToYen,fromYenToPound};