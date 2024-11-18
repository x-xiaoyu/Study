Section 20
Functions（函数）
函数只是我们包装起来并命名的可重用代码块，这样我们就可以在任何时候使用它们。
- Reusable procedures
- Functions allow us to write reuseable, modular code
- We define a "chunk" of code that we can then execute at a later point.
- We use them ALL THE TIME.

Define first
function funcName(){
    // do something
}

Run second
funcName(); //run once
funcName(); // run again!

Argument（参数）
一个参数
function greet(firstName){
    console.log(`firstName is: ${firstName}`)
}
- greet('Nancy) // OUTPUT: firstName is Nancy

两个参数
function greeting(firstName, lastName){
    console.log(`Hey there, ${firstName}`)
}
greet('Tom','Clooney') //就会按照顺序储存进去


function greeting(firstName, lastName){
    console.log(`Hey there, ${firstName} ${lastName[0]}. `) //这样就会显示lastname首字母
}


repeat('xxxxx', 10) //前面是你想说的 后面是倍数

Return
Built-in methods return values when we call them. We can store those values

- const yell = "I will end you".toUpperCase();
- yell; //"I WILL END YOU"

- const idx = ['a','b','c'].indexOf('c');
- idx //2

function add(x,y){
    if(typeOf x !== 'number' || typeOf y !== 'number'){
        return false;
    }
    let sum = x+y;
    return sum;
}












