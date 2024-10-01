
const myButton = document.getElementById('myButton');
const clickCount = document.getElementById('clickCount');
let count = 0;

myButton.addEventListener('click', () => {
    
    count = parseInt(clickCount.innerHTML, 10);
    count += 1
    clickCount.innerHTML = count;
})