// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar) {
    let valueInEuro = valueInDollar/1.07 
    let valueinYen = valueInEuro * 156.5
    return valueinYen
}

const fromYenToPound = function(valueinYen) {
    let valueInEuro = valueinYen/156.5    
    let valueinPound = valueInEuro * 0.87
    return valueinPound
}

module.exports = {sum, fromEuroToDollar,fromDollarToYen,fromYenToPound};