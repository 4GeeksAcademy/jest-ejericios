const sum = (a,b) => {
    return a+b
}

console.log(sum(7,3))

module.exports = { sum };




let oneEuroIs = {
    "JPY": 156.5, // Japan yen
    "USD": 1.07, // US dollar
    "GBP": 0.87, // British pound
};


function fromEuroToDollar(euros) {
    return euros * oneEuroIs.USD;
}


function fromDollarToYen(dollars) {
   
    let euros = dollars / oneEuroIs.USD;
    return euros * oneEuroIs.JPY;
}


function fromYenToPound(yen) {

    let euros = yen / oneEuroIs.JPY;
    return euros * oneEuroIs.GBP;
}


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };


