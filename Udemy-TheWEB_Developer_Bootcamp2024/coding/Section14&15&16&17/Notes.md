Section 14 & 15 & 16 & 17
* Primitive Type in JS
- Number
- String
- Boolean
- Null
- Undefined

Technically there are two others: Symbol and BigInt(非常不常用 所以了解即可)

第一节课先从chrome的console里写js代码，先不去编译器之类的地方敲

* Number in Js
- Js has one number type
- Positive numbers
- Negatives numbers
- Whole numbers(integers)
- Decimal numbers

<!-- operation in js + - * / % ** -->

* Not a number - NaN that is consider as a number in js
- NaN is a numeric value that represents something that is not a number.
- 0/0 //NaN
- 1+ NaN //NaN

- when you type of 4
- it will return "number"

- type of NaN
- it will return "number"

* Variables
Variables are like labels for values
- We can store a value and give it a name so that we can:
    - Refer back to it later
    - Use that value to do stuff
    - Or change it later one

* Basic Syntax
- let someName = value;
    - let year = 1985; Make me a variable called "year" and give it the value of 1985
    - and then put year in the concole , it will return 1985

* Updating varibles
- let score = 0;
    - score = 5; (score更新为5)
    - score = score +5; （5+5， score变10）
    - score += 5; (等同于score = score +5)
    - score -= 10; (score = score -10)
    - score *= 10; (score = score *10)
    - score /= 10; (score = score /10)
- score++;
- score--;

i++; 第一次返回是本身的数字
++i；第一次就返回原本的数+1


* Const 常数 不可改变
Const works just like let, except you CANNOT change the value!!!!!!!
- Const luck = 7;
    - luck = 10; //ERROR

* Var
The old variable keyword
Befor Let & Const, var was the only way of declaring variables.
These days, there isn't really a reason to use it.
- var runDistance =  20.5;
    - rundistance
    - 20.5

    - runDistance += 1;
    - 21.5

* Booleans （true or false）
- all lower cases (Python is True and False)

* Variables can change types
    - let puppy = 23; //Number
        - puppy = false; // Now a Boolean
        - puppy = 100; // back to number!

* Striings
"Strings of Characters"
- Strings are another primitive type in JavaScript. They represent text, and must be wrapped in quotes.
- double quotes or single quotes 一定要用双引号或者单引号印 不然就不是string了

* Strings are indexed
Each character has a corresponding index(a positional number)
- CHICKEN
- 0123456

- let animal = "dumbo octopus"
- animal[0]
    - return "d"
- animal.length
    - return 13

- "lol".length
    - return 3

- "lol"[0]
    - return "l"

- "lol" + "lol"
    - return "lollol"

- let year = "1998"
- year + 1
    - return "19981" //switch to String

* String Methods
Methods are built-in actions we can perform with individual strings
 They help us do things like:
    - Searching within a string
    - Replacing part of a string
    - Changing the casing of a string

Syntax
- thing.method()

Example
- let message = "leave me alone";
- message.toUpperCase()
    - return "LEAVE ME ALONE"

- let greeting = '      leave me alone";
- greeting.trim() // "leave me alone"
- .trim() 会删除用户输入进来的 字符串前后的空格

- greeting.trim().toUpperCase() //可以连起来使用
- return "LEAVE ME ALONE"

- thing.method(arg) 
Some methods accept arguments that modify their behavior. Think of them as inputs that we can pass in.
We pass these arguments insiade of the parentheses.
参数： 我们在括号中传递的这些输入将改变行为

Indexof
- let tvShow = 'catdog';
tvShow.indexOf('cat'); //0 这个是说这个词是从哪个index开始的
tvShow.indexOf('dog'); //3
tvShow.indexOf('z'); //-1 (not found)

Slice
- let str = 'supercalifragilisticexpialidocious'
- str.slice(0,5); //'super'
- str.slice(5); // 'califragilisticexpialidocious'
slide会提取或分割一个字符串的一部分 然后返回或者作为一个新的字符串给我们
也可以str.slice(-3); 只不过会倒着来数数

Replace
- let annoyingLaugh = 'teehee so funny! teehee!';
annoyingLaugh.replace('teehee', 'haha'); // 'haha so funny! teehee!'
Notice that it onlu replaces the first instance

Repeat
- "lol".repeat(2);
    - return "lollol"

Template Literals
- ‘I counted ${3+4} sheep' // "I counted 7 sheep"
这个比较方便 之前是各种“”和+ 还有空格啥的，这个语法就直接嵌入到句子中了
Notice: The back-tick key is usually above the tab key
We use back-ticks NOT single quotes
北美键盘上1前面的
只要用了这个back-ticks，语句里有${}什么的，不管花括号里放了什么，都会被当做一个表达式，他会被求值

Null
- "Intertional absence of any value"
- Must be assigned

Undefined
- Variables that do not have an assigned value are undefined

Math Object
Contains properties and methods for mathematical constants and functions
他只是一个属性和方法的集合
- Math.PI // 3.1415926...
- Math.round(4.9) //5 rounding a number
- Math.abs(-456) //456 absolute value
- Math.pow(2,5) //32 raises 2 to the 5th power;
- Math.floor(3.9999) // 3 removes decimal
- Math.ceil(3.1) //4 rounding up

Random Numbers
Math.random() gives us a random decimal etween 0 and 1(non-inclusive)
- Math.random();//0.282372837283
- Math.random();//0.8278743843


Section 16
Comparisons
- == equality
- != not equal
- === strict equality
- !== strict non-equal


console.log()
Prints arguments to the console.

alert(")
alert 将向用户打印一些内容，但不在控制台中打印，会跳出来一个框

prompt
let userInput = prompt("please enter a number")  //然后就会立马蹦出来一个提示框 让用户输入数字
（用户输入20）
- userInput return 20

Conditions
if statement
- let rating = 3;
- if(rating ===3 ){
    console.log("You are a superstar)
}

else if statement
- if(rating ===3 ){
    console.log("You are a superstar)
}else if(rating ==5){
    console.log('5')
}

else statement
- if(rating ===3 ){
    console.log("You are a superstar)
}else if(rating ==5){
    console.log('5')
}else{
    console.log('no')
}

Nesting


* Truthy and Falsy values
- All js values have an inherent truthyness or falsyness about them
- falsy values:
    - false
    - 0
    - "" (empty string)
    - null
    - undefined
    - NaN
- Everything else is truthy!

* Logical Operators
- && || !
- AND OR NOT

AND (BOTH RIGHT are true (left and right))
- 1<=4 && 'a' === 'a'; //true
- 9>10 && 9 >= 9; //false
- 'abc'.length === 3 && 1+1 === 4; //false

OR(Only one side needs to be true)
- 1 !== 1 || 10 === 10 //true
- 10/2 === 5 || null //true
- 0 || undefined //false

NOT
! expression returns tru if expression if false
- !null //true
- !(0===0) //false
- !(3 <= 4>) //false

Switch Statement(not use in real word)
The switch statement is another control-flow statement that can replace multiple if statements.
Good to know about!

Arrays
Ordered Collections of values.
- List of comments on IG post.
- Collection of levels in a game
- Songs in a playlist

- let students = []; //to make an empty array
- let colors = ['red', 'orange', 'yellow']; //an array of strings
- let lottoNums = [11,23,21,54,665,21]; // an array of numbers
- let stuff = [true, 68, 'cat', null]; // a mixed array

Arrays are indexed!
Each element has a corresponding index(counting starts ar 0)

如何把数据搞出来
- let colors = ['red', 'orange', 'yellow']; //an array of strings
- colors[2]
- return 'yellow'

如何替换array里的信息
const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix']; //DON'T TOUCH THIS LINE!
    leaderboard[1] = 'Luna'; // Update the second element to "Luna"
    leaderboard[3] = 'Draco'; // Update the last element to "Draco"
    console.log(leaderboard);

Array Methods
- Push: add to end
- Pop: remove from end
- Shift: remove from start
- Unshift: add to start

Push
- let movieLine = ['Tom','Nancy']
    - movieLine[2] = 'Pablo' // movieLine = ['Tom','Nancy','Pablo'] 也是增加的一个方法 但容易被替换
    - movieLine.push('Susie') // movieLine = ['Tom','Nancy','Pablo','Susie'] add to the end

Pop
    - movieLine.pop() // movieLine = ['Tom','Nancy','Pablo'] 不需要任何参数 直接从最后一个删

Shift:remove from start
    - movieLine.pop() // movieLine = ['Tom','Nancy','Pablo'] 不需要任何参数 直接从最后一个删
    - movieLine.shift() // "Tom" 会告诉这个函数返回的是被移除的元素，第一个字符串

Unshift: add to start

More Methods
- concat: merge arrays
    - const array1 = ['a','b','c'];
    - const array2 = ['a','b','c'];
    - const array3 = array1.concat(array2); 
    - console.log(array3); // ['a','b','c','a','b','c'];

- includes: look for a value
    - const array1 = ['a','b','c'];
    - console.log(array1.includes(2)); // expected output:true
    - console.log(array1.includes('a')); // expected output:true

- indexOf: just like string.indexOf
    - "Blue".indexOf('B') // return 0
    - "Blue".indexOf('3') // return 'e'
    - "Blue".indexOf('0') // return -1 which is false 不成立

- join: creates a string from an array

- reverse: reverses an array
    - const array1 = ['a','b','c'];
    - array1.reverse() // ['c','b','a']

- slice: copies a portion on an array
    - const array1 = ['a','b','c'];
    - array1.slice(start,end) 这俩都是option的，没写就是展示出完整的
    - array1.slice(0,1) // ['a','b']

- splice: removes/replaces elements
    - const months = ['Jan','March','April','June'];
    - months.splice(1,0,'Feb');  //inserts at index 1
    - console.log(months); //expected output: Array ['Jan','Feb','March','April','June'];

    - months.splice(4, 1,'May');  //replaces 1 element at index 4
    - console.log(months); //expected output: Array ['Jan','Feb','March','April','May'];

- sort: sorts an array


在数组中 == === 都会return false
因为里面的reference/address不一样 它不管[]里面有什么 都是false

Conts & Array
一般情况下常数不能改变 但array情况不一样
- const nums = [1,2,3,4];
 nums.push(4)// 这样可以
 但如果新assigned nums = [1,2,3,4] 即使肉眼看着一样，但实际已经变了
这个例子里是nums本身不变，[]不变， 里面内容变了也是可以的

Nesting Array:井字棋游戏
syntax: xxx[1][2][3]
替换的话直接——定位=”“ 就会变了




