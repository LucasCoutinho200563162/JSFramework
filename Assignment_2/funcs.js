// Function has default values, does not return anything, just concatenate 3 sentences and print on the console
export const printingText = (firstSentence =  "Hello", secondSentence =  "World!", thirdSentence =  ":D") => {
    console.log(firstSentence.concat(" ", secondSentence, " ", thirdSentence))
}


// Function that receives values for the speed value and origin unit (ms or kmh) then return the 
// converted speed. If origin unit is ms then convert to kmh, if origin unit is kmh then convert to ms
export const speedConverter = (speedValue = 60, originUnit = "kmh") => {
    if ( originUnit ===  "kmh") {
        return speedValue / 3.6
    } else if (originUnit === "ms"){
        return speedValue * 3.6
    } else {
        throw new Error("Recieved wrong unit")
    }
    
}



// Function to multiply by given value from user
export const multiplyBy = (number = 2, times = 1) => {
    return number * times
}

// Function to check if the number given is a prime number
const isPrime = (number = 2) => {
    // Checking if the number is divisible from 2 to its sqrt
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false
        }
    }
    return true
}


export const primeCheck = isPrime
