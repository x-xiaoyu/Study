// ———————————————————————————————————方法二：分割线V2—————————————————————————————————————————————
// 先定义调用v2
const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log("YOU CLICKED ME!")
    console.log("I HOPE IT WORKED!!")
}

// hover版当鼠标放在button上 会在console里进行提示hhh
function scream() {
    console.log("AAAAAHHHHH");
    console.log("STOP TOUCHING ME!")
}

btn.onmouseenter = scream;

//对h1进行clicked设置，也会有反应 只不过不像是button，单纯就是按一下
document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!')
}
// ———————————————————————————————————分割线V3—————————————————————————————————————————————

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert("CLICKED!");
})

// ———————————————————————————————————分割线tas—————————————————————————————————————————————

function twist() {
    console.log("TWIST!")
}
function shout() {
    console.log("SHOUT!")
}

const tasButton = document.querySelector('#tas');

// tasButton.onclick = twist;
// tasButton.onclick = shout;
// 这样的方式会很麻烦

tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout)
