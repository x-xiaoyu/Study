Section 21
<!-- Scope范围  -->
Variable "visibility"
The location where a variable is defined dictates where we hhave access to that variable.

Block Scope 

Lexical Scope 这个好像是各种嵌套function的感觉。。。。


const square = function(number) {
    return number * number;
};

Higher Order Functions 高阶函数
即函数与其他函数一起工作，或者他们对其他函数起作用
Functions that operate on/with other functions.
They can:
    Accept other functions as arguments
    Return a function



Methods
We can add functions as properties on objects. We call them methods!
Example:
const math = {
    multipy: function(x,y){
        return x * y;
    },

    divide: function(x,y){
        return x / y;
    }

    square: function(x){
        return x * x;
    }
}

ShortHand速记
We do this so often that there's a new shorthand way of adding methods.
const math = {
    blah: 'Hi!;
    add(x,y){
        return x+y;
    },
    mulitiply(x,y){
        retunr x * y;
    }
}
math.add(50,60) //110


'This' in methods
Use the keyword this to access other properties on the same object.
就是只能连接到method里面的东西
const person = {
    first: 'Robert',
    lastL 'Herjavec',
    fullName(){
        return `${this.first} ${this.last}`
    }
}

person.fullName();  //"Robert Herjavec"
person.last = "Plant";
person.fullName();  //"Robert Plant"


Example2：
const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg() {
        this.eggCount += 1; // Increment eggCount by 1
        return "EGG"; // Return the string "EGG"
    }
};



Try/Catch
不能只有一个try，还得跟着一个catch
try{
    hello.toUpperCase();
}catch{
    console.log("ERROR!!!")
}
hello.toUpperCase() //因为没有定义 所以肯定报错 这里是尝试try catch 的问题代码
console.log("After") //这个就是试试能不能继续运行程序






























