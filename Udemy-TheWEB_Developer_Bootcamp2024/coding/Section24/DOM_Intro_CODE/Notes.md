DOM = Document Object Model
DOM代表文档对象模型

The DOM is a JavaScript representation of a webpage.
It is your JS 'window' into the contents of a webpage.
It is just a buch of objects that you can interaact with via JS.
——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

修改网页内容、添加交互是通过 JavaScript (JS) 实现的，但 DOM 是 JavaScript 能做到这些事情的基础。可以这么理解：

DOM 是网页的结构化“地图”，它把网页上的所有内容组织成一个树状结构，供程序访问和操作。
JavaScript 是操纵DOM的工具，通过DOM提供的“接口”，JavaScript可以获取、修改和操作网页内容。
简单来说：
DOM 是目标，JavaScript 是工具。

两者关系的细化解释
DOM 是什么？ DOM 是浏览器提供的一种机制，帮助程序（比如JavaScript）“看懂”网页结构。它把 HTML 和 CSS 的内容转化成一种可以用代码访问的模型。

HTML 提供网页内容： 文字、图片、表格等。
DOM 负责描述这些内容： DOM 把 HTML 转换为节点树，组织成父子关系。
CSS 提供样式，渲染在浏览器上： DOM 也可以描述样式规则。
JavaScript 的作用 JavaScript 本身只是一个编程语言，它本质上并不了解HTML或网页。但通过 DOM 的接口，JavaScript 能够“看见”和“改变”网页。

比如：
通过 document.getElementById() 获取 DOM 树里的某个节点。
通过 innerText 修改节点里的文字。
通过事件绑定（onclick 等）响应用户操作。

打个比方
DOM 是一本书的目录：它告诉程序“这里有一章是标题，下面有两段内容，还有一个图片”。
JavaScript 是翻书的人：它根据目录找到目标，修改某一段话，插入新内容，甚至撕掉某一页。
没有DOM： JavaScript 无法理解网页内容。
没有JavaScript： DOM 虽然存在，但内容是静态的，无法根据用户的操作动态更新。

以上是chatGPT给的解释

——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

Document
The document object is out entry point into the world of the DOM.
It contains representations of all the content on a page, plus tons of useful methods and properties.

Selecting Elements
Using JS 来挑选出某个类的一个元素或所有元素，就像在CSS中所做的那样，我们并不是将每一种样式应用于每个元素。
1. Select 选择器
2. Manipulate 开始操作

————————————————————————————————————————————————————————————————————————————————————————————————

三种函数：
- getElementById //通过id设置
    - document.getElementById('')
    - const banner = document.getElementById('banner') // 保存一个变量
- getElementsByTagName //通过name设置
    - document.getElementByTagName('img')
    - const allImages = document.getElementByTagName('img') //保存一个变量
    - for (let img of allImages){
        img.scr = '此处是网址'
    }
- getElementsByClassName //通过class设置

——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

QuerySelector
A newer, all-in-one method to select to single element.
就是可以用这一个选择器 选不同种类的类型

//Finds first h1 element:
document.querySelector('h1');

//Finds first element with ID of red:
document.querySelector('#red');

//Finds first element with clsaa of big
dodument.querySelector('.big');


querySelectAll
same idea, but returns a collection of matching elements
- const links  = document.querySelectorAll('p a');
- for (let link of links){
        console.log(link.href)
    }
    //会把所有的anchor tag source打出来

练习题：
// Select all elements with the class "done" using querySelectorAll
const doneTodos = document.querySelectorAll('.done');

// Select the checkbox element with the id "scales" using querySelector
const checkbox = document.querySelector('#scales');

——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
Manipulate Part

Properties & Methods(the important ones)
- classList
- getAttribute()
    - document.querySelector('a').href //也可以把html展示出来
    - const firstLink = document.querySelector('a') //define
    - firstLink.href //把html链接展示出来
    - firstLink.getAttribute('href') //会把html链接展示出来 但没有xx:/ 
- setAttribute()
- appendChild()
- append()
- prepend()
- removeChild()
- remove()
- createElement
- innerText
    - document.querySelector('p').innerText //会把p标签里的所有text展示出来
- textContent
    - 这是干嘛的？？？？？
- innerHTML
    - document.querySelector('h1').innerHTML //会把html里的h1展示出来
    如果想要更改的话就直接document.querySelector('h1').innerHTML = ’你想改的内容‘ 他就会覆盖了 +=会变上标
    document.querySelector('span').innerText = 'Disgusting';  //现在Output是Pickles Are Disgusting
    <!-- 原本html的代码是  <h1>Pickles Are <span>Delicious</span></h1> -->
- value
- parentElement
- children
- nextSibling
- previousSibling
- style

——————————————————————————————————————————————————————————————————————————————————————————————————————————————————

attribute()
这里没听懂 啥玩意儿就开始讲input了
- document.querySelectorAll('input')[1] 
<!-- //<input type = "text"> -->
- document.querySelector('input[type="text"]')
<!-- //<input type = "text"> -->
- const input = document.querySelector('input[type="text"]')
// save a variable in input 然后界面中就出现了一个input框？？？？

input.type //"text"
input.type = 'password' //框里就是文本模式
input.type = 'color' //框里就是颜色选择器
input.setAttribute('type', 'text')  //又变回了文本模式

练习：
// The url you need: 'https://images.unsplash.com/photo-1581061090142-c2cd0ec9f021?w=200'

// The URL you need
const newUrl = 'https://images.unsplash.com/photo-1581061090142-c2cd0ec9f021?w=200';

// Select the image element
const img = document.querySelector('img');

// Change the image source
img.src = newUrl;

// Change the alt text
img.alt = 'chicken';

——————————————————————————————————————————————————————————————————————————————————————————————————————————————————
style
~~~~~~~内联样式 in-line style~~~~~
const h1 = documents.querySelector('h1'); //define
h1 
<!-- //展示<h1>Silkie Chickens</h1> -->
h1.style //可以看到h1中所有的style

h1.style.color = 'green'
h1.style.color = '3em'
h1.style.color = '2px solid pink'
可以通过dom设置所有这些样式属性（in-line style）

const allLinks = document.querySelectorAll('a');
for (let link of allLinks){
    link.style.color = 'red' //就会把所有的link都变成红色 这样比较快+全 像class一样
}


Practice1:
// Select the div with id "container" and align its text to the center
const container = document.querySelector('#container');
container.style.textAlign = 'center';

// Select the image and update its width and border radius
const img = document.querySelector('img');
img.style.width = '150px';
img.style.borderRadius = '50%';


Practice 2:
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

// Select all the span elements inside the h1
const spans = document.querySelectorAll('h1 span');

// Iterate over the spans and assign each a color from the colors array
spans.forEach((span, index) => {
    span.style.color = colors[index];
});


~~~~~~~方法2~~~~~~~
1. 定义一个variable
const h2 = document.querySelector('h2') // undefined 证明现在define了

2. 检查是否有这个h2 class
h2.getAttribute('class') // null

3. 设置h2 class
h2.setAttribute('class', 'purple') 这样就会把这个h2 class变成紫色

4. 如果有这个clas
那么是这样的，比如h2有border
h2.setAttribute('class','border') //这里面就会显示一个border的样式，不可以结合到一起

5. 重新define
let currentClasses = h2.getAttribute('class')

6. 显示当前class
currentClasses // “border”

7. 结合border样式
h2.setAttribute('class', `${currentClasses} purple`)
这样就都结合到一起了

但如果要combine的多了，这个就很烦 所以有了class-list

~~~~~~~方法3 Class-list~~~~~~~

const h2 = document.querySelector('h2')

h2.classList //当前没有任何东西
h2.classList.add('purple') //开始设置进去了 在行内
h2.classList.add('border')  //此时 html的行内是<h2 id = "" class = "purple border"></h2>
h2.classList.remove('border') //此时 html的行内是<h2 id = "" class = "purple"></h2>
h2.classList.contains('border') //false 是为了检查这个class里面是否有border这个东西

但真正常见的是想要在打开和关闭之间切换一个类
h2.classList.toggle('border') //ture 如果这个类里没有 那么他就会添加进去 如果有 就会删除出去 false 这就是来回切换


Practice：更改颜色
// WRITE YOUR CODE IN HERE:
const listItems = document.querySelectorAll('li'); // Select all <li> elements

// Iterate over each <li> element and toggle the 'highlight' class
listItems.forEach(item => {
    item.classList.toggle('highlight');
});



—————————————————————————————————————————————————————————————————————————————————————————————————————————————————
ParentElement 、children

const firstBold = document.querySelector('b')
firstBold //<b>Silkie</b> 显示当前的标签
firstBold.parentElement //<p>xxxx</p> 显示当前标签的上一级 父元素
firstBold.parentElement.oarentElement //<body>xxxx</body> 显示当前标签的上一级 父元素 可以再网上查就是route HTML元素

const paragraph = firstBold.parentElement //简单定义一下 为了展示children
paragraph.children //就会显示出来每个段落的子段落


Sibling 这些属性允许我们从一个元素导航到相邻的兄弟元素
是依据节点走的 像是回车 空格 换行之类的

.previousElementSibling
.nextElemntSibling
这两个比较常用

—————————————————————————————————————————————————————————————————————————————————————————————————————————————————
Adding & delete
Append % AppendChild

创建元素类型
document.createElement

p.append("I am new text yaaaaayyy!", "asasdasdasdasd")
//在段落后面添加这些词


practice: creating things
oh 淦 这真的忘了

// WRITE YOUR CODE IN HERE:
// Select the container element
const container = document.getElementById('container');

// Loop 100 times
for (let i = 1; i <= 100; i++) {
    // Create a new button element
    const button = document.createElement('button');
    
    // Set the inner text of the button
    button.innerText = `Hey!`;
    
    // Append the button to the container
    container.append(button);
}

—————————————————————————————————————————————————————————————————————————————————————————————————————————————————
removeChild

~~~~~~麻烦版本的removeChild~~~~~~~
const firstLi = document.querySelector('li') //定义firstLi是li的第一个元素
firstLi //把第一个li显示出来
const ul = firstLi.parentElement //定义ul是firstLi的父元素
ul //显示当前ul 父元素
ul.removeChild(firstLi) //这回才把第一个li删掉


~~~~~简单版的~~~~~~~~
const b = document.querySelector('b')
b.parentElement.removeChild(b)


~~~~~~~~升级版~~~~~~~~~~~~~
.remove()

const img = document.querySelector('img')
img.remove()
就完啦！！！！！！这个行，时代在进步




























































