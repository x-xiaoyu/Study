const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// input.addEventListener('change', function (e) {
//     console.log("CASKDJASKJHD")
// })

input.addEventListener('input', function (e) {
    h1.innerText = input.value;
})

/*
// Select the input and h1 elements
const input = document.querySelector('#username');
const h1 = document.querySelector('h1');

// Add an event listener for the 'input' event
input.addEventListener('input', function () {
    // Check if the input is empty
    if (input.value === '') {
        h1.innerText = 'Enter Your Username';
    } else {
        // Update the h1 with the input value
        h1.innerText = `Welcome, ${input.value}`;
    }
});
这个是practice的答案 练习实时监听
*/