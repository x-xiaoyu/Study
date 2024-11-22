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


2. Key word ----> this

3. The Event object
4. Form Event 当你输入form的时候会自动跳action 就是这里，这个部分就是后端需要做的，你的url会变成action里写的东西 但可以设置成只在console里提示 .preventDefault（）可以避免跳转
    Form event文件里有实例


