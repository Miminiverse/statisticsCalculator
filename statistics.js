

function meanCalculation () {
    var number = document.getElementById("numberList")
    var arrayString = number.value.split(" ");
    var arrayNumber = arrayString.map(Number);
    var sum = arrayNumber.reduce(function(a,b) {
        return a + b
    })
    arrayLength = arrayString.length
    var mean = sum / arrayLength
    return { mean: mean, arrayNumber: arrayNumber, arrayLength: arrayLength}
};

function meanCalc () {
    var meanVal = meanCalculation()
    var mean = meanVal.mean
    document.getElementById("meanResult").innerHTML = mean 
}


function varianceCalculation () {
    var value = meanCalculation()
    var mean = value.mean
    var arrayNumber = value.arrayNumber
    var arrayLength = value.arrayLength
    var devMean = arrayNumber.map((num) => (num - mean)).map(Math.abs)
    var sqrDif = devMean.map((num) => (Math.pow(num,2)))
    var sumDif = sqrDif.reduce(function(c,d) {
        return c+d
    })
    var variance = sumDif / arrayLength
    return variance
}

function varianceCalc (){
    var variance = varianceCalculation ()
    document.getElementById("varianceResult").innerHTML = variance
}


function stdDevCalc () {
    var variance = varianceCalculation()
    stdDev = Math.sqrt(variance)
    document.getElementById("stdResult").innerHTML = stdDev
}


