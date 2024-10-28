
const bulb = document.querySelector('.bulb');

const switchh = document.querySelector('.switch');

const bulb_on_off = document.querySelector('.bulb_on_off');

let condittion = false;

switchh.addEventListener('click', function(){
    if (condittion === false){
        bulb.style.backgroundColor = 'yellow'
        condittion = true;
        bulb_on_off.innerHTML = 'Bulb is ON'
        switchh.innerHTML = 'OFF'
    }
    else if (condittion === true){
        bulb.style.backgroundColor = 'white'
        condittion = false;
        bulb_on_off.innerHTML = 'Bulb is OFF'
        switchh.innerHTML = 'ON'
    }
});
