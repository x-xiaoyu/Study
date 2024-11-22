/*
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset')
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
// 这个是为了设置当中途想要更改winningscore的时候 全部清零 而不是继续当前分数
const winningScoreSelect = document.querySelector('#playto')


let p1Score = 0;
// 此处要设置最终分数是多少，这样游戏有结束目标，为什么使用let 不用const，是因为可以选择一个不同的赢分，这样变量的值就会改变
let winningScore = 5;
let p2Score = 0; //先初始化，这样就可以记录分数了
let isGameOver = false;

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        // 如果p1的成绩没有达到winningscore，游戏继续，就接着往上加
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
        }
        // 这个是当你点击p1Button，p1Display就会相应增加
        p1Display.textContent = p1Score;
    }
})

/*初始版本
p2Button.addEventListener('click', function () {
    // 如果p1的成绩没有达到winningscore，就接着网上加
    if (p2Score !== winningScore) {
        p2Score += 1;
        // 这个是当你点击p1Button，p1Display就会相应增加
        p2Display.textContent = p2Score;
    }

}) 

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        // 如果p1的成绩没有达到winningscore，游戏继续，就接着往上加
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
        }
        // 这个是当你点击p1Button，p1Display就会相应增加
        p2Display.textContent = p2Score;
    }
})

//为了设置清零的function
winningScore.addEventListener('change', function () {
    //更新winning Score parseInt是为了确保是整数
    winningScore = parseInt(this.value)
    reset();
})



/*这个是当设置winningScore reset的时候发现和这个function功能一样，所以挑出去了
//p1+p2弄完了 该弄reset了
resetButton.addEventListener('click', function () {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    //这样就会在屏幕上显示p1p2玩家的分数归零了
    p1Display.textContent = 0;
    p2Display.textContent = 0;


})
  
resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;

    p1Display.textContent = 0;
    p2Display.textContent = 0;
}
*/

// _________________________________________实在不想检查了之后再说 下面是chat修改的__________________________________________________

const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playto'); // 修复选择器

const DEFAULT_WINNING_SCORE = 5;
let p1Score = 0;
let p2Score = 0;
let winningScore = DEFAULT_WINNING_SCORE;
let isGameOver = false;

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        p1Display.textContent = p1Score;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
        }
    }
});

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        p2Display.textContent = p2Score;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
        }
    }
});

winningScoreSelect.addEventListener('change', function () {
    const value = parseInt(this.value);
    if (isNaN(value) || value <= 0) {
        alert("Please enter a valid number greater than 0");
        this.value = DEFAULT_WINNING_SCORE;
        return;
    }
    winningScore = value;
    reset();
});

resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
}
