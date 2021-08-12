// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba:
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

//segunda prueba:
test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

////tercera prueba:
test("One dollar should be 106.58 yens", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(4)).toBe(426.32); //1 dolar son 106.58 yenes, entonces 4 dolares deberian ser = (4 * 106.58)
})

////cuarta prueba:
test("One yen should be 0.00625 pounds", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(500)).toBe(3.125); //1 yen son 0.00625 pounds, entonces 500 yenes deberian ser = (50 * 0.00625)
})