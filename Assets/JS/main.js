var add1 = document.getElementById('add1');
var add2 = document.getElementById('add2');
var add3 = document.getElementById('add3');

var minus1 = document.getElementById('minus1');
var minus2 = document.getElementById('minus2');
var minus3 = document.getElementById('minus3');

var para1 = document.getElementById('para1');
var para2 = document.getElementById('para2');
var para3 = document.getElementById('para3');

// box one
add1.addEventListener('click', () => {
    minus1.style.display = 'block';
    add1.style.display = 'none';
    para1.style.display = 'block';

})
minus1.addEventListener('click', () => {
    minus1.style.display = 'none';
    add1.style.display = 'block';
    para1.style.display = 'none';
})

// index box2
add2.addEventListener('click', () => {
    minus2.style.display = 'block';
    add2.style.display = 'none';
    para2.style.display = 'block';

})
minus2.addEventListener('click', () => {
    minus2.style.display = 'none';
    add2.style.display = 'block';
    para2.style.display = 'none';
})

// box three
add3.addEventListener('click', () => {
    minus3.style.display = 'block';
    add3.style.display = 'none';
    para3.style.display = 'block';

})
minus3.addEventListener('click', () => {
    minus3.style.display = 'none';
    add3.style.display = 'block';
    para3.style.display = 'none';
})