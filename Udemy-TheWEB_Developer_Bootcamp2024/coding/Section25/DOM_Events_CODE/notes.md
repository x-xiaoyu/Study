Section 25
Intro to Events
事件是创建任何类型的交互式网站的关键，可以根据用户的行为做任何事情。
因此，这归结为但那个用户执行某些操作时对正在运行的代码的响应
Responding to user inputs and actions!
Example：
clicks/drags/drops/hovers/scrolls/form submission/key presses/ focus or blur
mouse wheel/ double click/ copying/ pasting/audio start/ screent resize/printing
这些就是一些简单的我们知道用户想干这个事情，然后我们用js给用户操作

只有三种方法可以用来响应用户事件和用户交互

1. 文件EventBasics里展示


addEventListener 事件监听器
Specify the event type and a callback to run

Example 也在EventBasic的文件里v3就是:
const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert("CLICKED!");
})
