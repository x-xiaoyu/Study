// ==========================================
// AN OLDER WAY OF ADDING DEFAULT PARAM VALUE 默认参数 当我们写一个函数的时候 会有一些参数，而且他可能是optional的,如果没有，我们会它一个默认值
// ==========================================

// function rollDie(numSides) {
//     if (numSides === undefined) {
//         numSides = 6
//     }
//     return Math.floor(Math.random() * numSides) + 1
// }

// ============
// THE NEW WAY!
// ============

/*
// 举个例子 OLD WAY
function multiply(a,b){
    b = typeOf b !== 'undefined' ? b : 1;
    return a * b;
}

multiply(7); //OUTPUT:7
multiply(7,3); //OUTPUT: 21

// NEW WAY
function multiply(a,b = 1){
    return a * b;
}
multiply(4); //OUTPUT:4
multiply(4,5); //OUTPUT: 20
*/

function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}

// Always to your default value not to the first,在这里 msg是有默认值的，punc也是
function greet(person, msg = "Hey there", punc = '!') {
    console.log(`${msg}, ${person}${punc}`)
}


