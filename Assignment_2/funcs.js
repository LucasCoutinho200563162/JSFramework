export const printingText = (firstSentence =  "Hello", secondSentence =  "World!", thirdSentence =  ":D") => {
    console.log(firstSentence.concat(" ", secondSentence, " ", thirdSentence))
}

export const speedConverter = (speedValue = 60, originUnit = "kmh") => {
    if ( originUnit ==  "kmh") {
        return speedValue / 3.6
    } else if (originUnit == "ms"){
        return speedValue * 3.6
    } else {
        return 0
    }
    
}

export const double = (number = 2) => {
    return number * 2
}

const isPrime = (number = 2) => {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false
        }
    }
    return true
}


export const primeCheck = isPrime
