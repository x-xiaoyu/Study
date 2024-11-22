// 事件对象Event Object，它会自动传递给回调函数
document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt)
})

// const input = document.querySelector('input');
// input.addEventListener('keydown', function (e) {
//     console.log(e.key)
//     console.log(e.code)
// })
// input.addEventListener('keyup', function () {
//     console.log("KEYUP")
// })

/*
当你给事件监听器（addEventListener）传递一个回调函数时，浏览器会自动将事件对象传递给这个函数。这个事件对象 e 包含了关于事件发生时的信息，比如按下的键、鼠标的坐标等等。
在你的例子中，e 是一个 KeyboardEvent 对象，表示键盘事件。它包含许多有用的属性，例如：
e.code: 表示按键的物理位置（比如 'ArrowUp'、'KeyA' 等）。
e.key: 表示按键的具体值（比如 'ArrowUp' 或 'a'）。
其他属性，比如 e.shiftKey（是否按下了 Shift 键）、e.ctrlKey（是否按下了 Ctrl 键）等等。
*/
window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log("DOWN!");
            break;
        case 'ArrowLeft':
            console.log("LEFT!");
            break;
        case 'ArrowRight':
            console.log("RIGHT!");
            break
        default:
            console.log("IGNORED!")
    }
})