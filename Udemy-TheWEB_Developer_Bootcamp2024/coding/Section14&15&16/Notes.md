Section 14 & 15 & 16
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






















