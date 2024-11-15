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