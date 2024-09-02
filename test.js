

const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');



test("One euro should be 1.07 dollars", function() {
    
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
})

test("One dollar should be 146.26168 yens", function() {   

    // Uso la función como debe ser usada
    const yen = fromDollarToYen(3.5);   
    
    const expected = (3.5 / 1.07) * 156.5;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.5)).toBe(expected); 
})



test("One yen should be 0,005559 pounds", function() {   

    // Uso la función como debe ser usada
    const pound = fromYenToPound(3.5);   
    
    const expected = ( 3.5 / 156.5) * 0.87;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(3.5)).toBe(expected); 
})



