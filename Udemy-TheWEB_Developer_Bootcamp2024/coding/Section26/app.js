const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p1Display')

let p1Score = 0;

p1Button.addEventListener('click', function () {
    p1Score += 1;
})

