function meanCalculation () {
    var number = document.getElementById("numberList");
    var arrayString = number.value.trim().split(" ");
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
    var arrayNumber = meanVal.arrayNumber

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
    return { variance: variance, arrayNumber: arrayNumber}
}

// The formula for variance for a population
function varianceCalc (){
    var varianceVal = varianceCalculation ()
    var variance = varianceVal.variance
    var arrayNumber = varianceVal.arrayNumber

    document.getElementById("varianceResult").innerHTML = variance

}

// The formula for Standard Deviation for a population
function stdDevCalc () {
    var varianceVal = varianceCalculation ()
    var variance = varianceVal.variance
    var arrayNumber = varianceVal.arrayNumber
    stdDev = Math.sqrt(variance)

    document.getElementById("stdResult").innerHTML = stdDev

}

function clearInput () {
    document.getElementById('numberList').value = ""
    document.getElementById('meanResult').innerHTML = ""
    document.getElementById('varianceResult').innerHTML = ""
    document.getElementById('stdResult').innerHTML = ""
    document.getElementById('mean').disabled = true
    document.getElementById('variance').disabled = true
    document.getElementById('std').disabled = true
}

function onChange () {
    document.getElementById('mean').disabled = false
    document.getElementById('variance').disabled = false
    document.getElementById('std').disabled = false
}

