function testReverseString1(){

    let result = reverseString("Kenzie Academy");
    let expected = "ymedacA eizneK";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }


function testReverseString2(){

    let result = reverseString("ian kuntz");
    let expected = "ztnuk nai";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }


function reverseString(str){

    return str.split("").reverse().join("")

    
}
    testReverseString1()

    testReverseString2()


function testReverseSentence1(){

    let result = reverseSentence("Kenzie Academy");
    let expected = "Academy Kenzie";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testReverseSentence2(){

    let result = reverseSentence("bob like dogs");
    let expected = "dogs like bob";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)

}

function reverseSentence(stc){

    return stc.split(" ").reverse().join(" ")

}
    
    testReverseSentence1()
    testReverseSentence2()


function testMinimumValue1(){

    let expected = minimumValue([2,4,6,8,2])
    let result = 2

    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)

}

function testMinimumValue2(){

    let expected = minimumValue([5,7,8,10,12])
    let result = 5

    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function minimumValue(min){

    let minimo = min.sort((a, b) => a - b);

    return minimo[0]

}
    testMinimumValue1()
    testMinimumValue2()

function testMaximumValue1(){

    let expected = maximumValue([2,4,6,8,2])
    let result = 8

    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testMaximumValue2(){

    let expected = maximumValue([5,7,8,10,12])
    let result = 12

    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)

}

function maximumValue(max){

    let maximo = max.sort((a, b) => b - a)

    return maximo[0]
    
}


function testCalculateRemainder1(){

    let expected = calculateRemainder(2,2)
    let result = 0

    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testCalculateRemainder2(){

    let expected = calculateRemainder(9,2)
    let result = 1

    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}


function calculateRemainder(x, y){

    return x % y

}

function testDistinctValues1(){

    let expected = distinctValues("1 3 5 3 7 3 1 1 5")
    let result = "1 3 5 7"

    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testDistinctValues2(){

    let expected = distinctValues("14 14 2 15 6 12 12")
    let result = "2 6 12 14 15"

    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)

}

function distinctValues(distint){

    let array = distint.split(" ").sort((a, b) => a - b)

    let result = [array[0]]

    for(let i = 1; i < array.length; i++){
        
        if(array[i-1] !== array[i]){
            
            result.push(array[i])
            
        }
    }   
    return result.join(" ")
}
    testDistinctValues1()
    testDistinctValues2()


function testCountValues1(){
    
    let expected = countValues("1 3 5 3 7 3 1 1 5")
    let result = "1(3) 3(3) 5(2) 7(1)"

    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)

}

function testCountValues2(){

    let expected = countValues("1 3 3 9 9 5 3 7 7 3 4 4 5")
    let result = "1(1) 3(4) 4(2) 5(2) 7(2) 9(2)"

    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)

}

function countValues(count){

    let contador = count.split(" ").sort()
    let arr = [...new Set(contador)]
    let result = []

    for(let i = 0; i < arr.length; i++){

        let contar = arr[i]
        let quant = 0

    for(let j = 0; j < contador.length; j++){

        if(contar === contador[j]){
        quant++
        }

    }result.push(`${contar}(${quant})`)  

}return result.join(" ")
}

testCountValues1()
testCountValues2()






// function testEvaluateExpression1(){

//     let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
//     let expected = -3
    
//     console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
// }

// function testEvaluateExpression2(){

//     let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
//     let expected = -3

//     console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)

// }

// function evaluateExpression(){


// }