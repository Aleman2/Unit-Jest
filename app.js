const sum = function(a,b) {
    return a + b
}

console.log(sum(7,3))


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = function(dollar){
 let euro = dollar/oneEuroIs.USD;
 return euro*oneEuroIs.JPY
}






const fromEuroToDollar = function(euro){
    return euro*oneEuroIs.USD
   }
   






const fromYenToPound = function(Yen){
    let euro = Yen/oneEuroIs.JPY
    return euro*oneEuroIs.GBP
   }
   module.exports = { sum, fromDollarToYen, fromEuroToDollar,fromYenToPound };



console.log(fromDollarToYen(6))
console.log(fromEuroToDollar(7))
console.log(fromYenToPound(639.5))