// const quant = document.querySelector('.quantShow');
// const showQantity = document.querySelector('.ShowQantity');
// const addToCart = document.querySelector('.addToCart');
// const addToCartTwo = document.querySelector('.addToCartTwo');
// const addToCartThree = document.querySelector('.addToCartThree');
// const reset = document.querySelector('.reset');
// const subtract = document.querySelector('.subtract');

// let quantity = 0;

// showQantity.addEventListener('click', function () {
//     console.log(quantity);
// });

// addToCart.addEventListener('click', function () {
//     // quantity++;
//     // qantity+=1;
//     quantity = quantity + 1
//     quant.innerHTML = quantity;
// });

// addToCartTwo.addEventListener('click', function () {
//     quantity += 2
//     quant.innerHTML = quantity;
// });

// addToCartThree.addEventListener('click', function () {
//     quantity += 3;
//     quant.innerHTML = quantity;
// });

// reset.addEventListener('click', function () {
//     quantity = 0;
//     quant.innerHTML = quantity;
// });

// subtract.addEventListener('click', function () {
//     quantity -= 1;
//     quant.innerHTML = quantity;
// });

const quant = document.querySelector('.quantShow');
const ShowQantity = document.querySelector('.ShowQantity');
const addToCart = document.querySelector('.addToCart');
const addToCartTwo = document.querySelector('.addToCartTwo');
const addToCartThree = document.querySelector('.addToCartThree');
const reset = document.querySelector('.reset');
const subtract = document.querySelector('.subtract');

let count = 0;

function value(){
    quant.innerHTML = count;
}

addToCart.addEventListener('click', function(){
    count+=1;
    value();
});

addToCartTwo.addEventListener('click', function(){
    count+=2;
    value();
});

addToCartThree.addEventListener('click', function(){
    count+=3;
    value();
});

subtract.addEventListener('click', function(){
    count-=1;
    value();
});

reset.addEventListener('click', function(){
    count=0;
    value();
});
