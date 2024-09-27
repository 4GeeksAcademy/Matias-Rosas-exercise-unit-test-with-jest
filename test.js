test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(1);

    // Si 1 euro son 1.07 dólares
    const expected = 1 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected); // 1 euro debería ser 1.07 dólares
});

test("One dollar should be 146.26168224299064", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yens = fromDollarToYen(1);

    // Primero convierto el dólar a euros: 1 / 1.07, luego euros a yenes
    const expected = (1 / 1.07) * 156.5;

    // Hago mi comparación (la prueba)
    expect(yens).toBe(146.26168224299064); 
});

test("One yen should be 0.0055591054313099035 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pounds = fromYenToPound(1);

    // Primero convierto yenes a euros: 1 / 156.5, luego euros a libras
    const expected = (1 / 156.5) * 0.87;

    // Hago mi comparación (la prueba)
    expect(pounds).toBe(0.0055591054313099035); // Uso toBeCloseTo para manejar posibles diferencias en los decimales
});
