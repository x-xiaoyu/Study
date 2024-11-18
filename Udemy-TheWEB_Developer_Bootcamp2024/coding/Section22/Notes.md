Section 22 Callbacks & Array Methods

forEach Method 接受函数作为参数的数组方法 
Accepts a callback function. Calls the function once per element in the array
它的作用是允许我们运行一个函数，对数组中的每一项运行一次代码

Example：
- const numbers = [1,2,3,4,5,6,7];
- numbers.forEach(print) //每个元素都会print out

正常来讲 我们是要定义一个函数function的，然后再去调用它
但后面经常发现
- const numbers = [1,2,3,4,5,6,7];
- //匿名函数表达式
- numbers.forEach(function(el)){
    console.log(el)
} 

这个是为了在console里看的更清楚 上面的代码是怎么运行的
for(let el of numbers){
    console.log(el);
}

--------------------------------------------------------------------------------


Map
Creates a new array with the results of calling a callback on every element in the array
接受回调函数，也会对数组中的每一项运行一次代码
但不同于forEach的事他会使用回调的返回值，生成一个新的数组

Example：
 const texts = ['rofl','lol','omg','ttyl'];
 const caps = texts.map(function(t){
    return t.toUpperCase();
 })

 texts; //["rofl","lol","omg","ttyl"]
 caps; //["ROFL","LOL","OMG","TTLY"]

Practice:
// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [
    {first: 'Albus', last: 'Dumbledore'},
    {first: 'Harry', last: 'Potter'},
    {first: 'Hermione', last: 'Granger'},
    {first: 'Ron', last: 'Weasley'},
    {first: 'Rubeus', last: 'Hagrid'},
    {first: 'Minerva', last: 'McGonagall'},
    {first: 'Severus', last: 'Snape'}
];

// Write your code here
const firstNames = fullNames.map(function(t) {
    return t.first; // Correctly access the `first` property
});

console.log(firstNames); // ['Albus', 'Harry', 'Hermione', 'Ron', 'Rubeus', 'Minerva', 'Severus']


--------------------------------------------------------------------------------

Arrow functions 是为了创建函数表达式
a newer syntax 
"Syntactically compact alternative" to a regular function expression
语法格式：
const square = (x) ==> {
    return x * x;
}

const sum = (x,y) => {
    return x+y;
}


Example1:
Const add = function (x,y){
    return x + y;
}

function add(x,y){
    return x+y;
}

转换成arrow function是这个样子的
const add = (x,y) ==>{
    rerurn x + y;
}

实验1；
const square = (x) =>{
    return x * x;
}

如果我们有一个没有参数argument的箭头函数
const rollDie =  () => {
    return Math.floor(Math.random()*6) +1
}

还有一种方法可以让它们更紧凑，在某些状况下，我们可以利用隐式返回 implicit returns
就是省略return关键字

以下是几个例子：使用圆括号替换花括号 告诉js我只返回这一个东西 只会return一次 不需要写return关键字 并且自动implilict return it for me
const isEven = function(num){ //regular function expression
    return num % 2 === 0;
}

const isEven = (num) => { //arrow function with parens around param
    return num % 2 === 0;
}

const isEven = num => { //no parens aroung param
    return num % 2 === 0;
}

const isEven = num => (//implicit return 变成括号了
    num % 2 === 0;
);

const isEven = num => num % 2 === 0; //one-liner implicit return , FINAL version

实际例子：
const rollDie = () => {
    Math.floor(Math.random() * 6) +1
}

const add = (a,b) => (
    a + b
)

THEY ONLY WORK IF THERE IS ONE, AND ONLY ONE STATEMENT, ONE EXPRESSION
rather in the body of your function.



const newMovies = movies.map(movie => `${movie.title} - ${movie.score / 10}`)



--------------------------------------------------------------------------------

setTimeout(() =>{
    console.log("HELLO!!!")
    },3000)
浏览器会等待3秒之后显示hello
还有很多其他的使用方法 不常用 了解即可

--------------------------------------------------------------------------------

Filter Method
Creates a new array with all elements that pass the test implimented by the provided function.
const nums = [9,8,7,6,5,4,3,2,1];
const odds = nums.filter(n => { // out callback returns true or false
    return n % 2 === 1;
})
//[9,7,5,3,1]

const smallNums = nums.filter(n => n < 5); //[4,3,2,1]

例子2：
假设这里是很多movies的信息 含title score year
const goodMovies = movies.filter(m => m.score >80)
const goodTitles = goodMovies.map(m => m.title)

movies.filter(m=> m.score >80).map(m => m.title);

const badMovies = movies.filter(m =>m.score < 70)
const recentMovies = movies.filter(m => m.year > 2000)

Filter Exercise:
Let's get some practice using the filter method. Write a function called validUserNames that accepts an array of usernames (strings).  It should return a new array, containing only the usernames that are less than 10 characters. For example:

validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);
// => ["mark", "carrie98", "MoanaFan"]


Note: The syntax for this solution might be a little strange to you at this point in the course because it requires you to write the code, that you just learned in the previous lecture, inside of a function. e.g.,

function validUserNames(usernames) {
  // your code here
}


or if you want to get fancy with an arrow function:

const validUserNames = usernames => // your code here;


There is no need to define an actual array of usernames, that part is done for you behind the scenes.

答案：
function validUserNames(usernames) {
  // Filter usernames with less than 10 characters and return the result
  return usernames.filter(name => name.length < 10);
}

--------------------------------------------------------------------------------

Some & Every Method
Similar to every, but returns true if ANY of the array elements pass the test function
They are boolean mathod
They are ways to test if every element in an array passes some test, that's what every does.
它们是测试数组中的每个元素是否都通过某个测试的方法

如果传入该函数的每个元素都返回true，则整个array 函数调用都返回true

const exams = [60,44,89,90]
exams.every(score => score >= 60)
如果都及格了 会返回true，如果有人没及格 就会返回false

--------------------------------------------------------------------------------
Notorious Reduce Method
Executes a reducer function on each element of the array, resulting in a single value.
它的主要目标是取一个数组，并在一天结束时将其缩减为一个值

[3,5,7,9,11].reduce((accumulator.currentValue) => {
    return accumulator + currentValue;
});

Callback    accumulator     currentValue        return value
first call      3               5                   8
second call     8               7                   15
third call      15              9                   24
fourth call     24              11                  35

没好好看 之后有问题再说吧 234集

--------------------------------------------------------------------------------
Arrow Function & 'This'

同上235集


















