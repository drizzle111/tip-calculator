window.onload = function() {
    alert('Enter the number of people before selecting the tip %')
}
let cl = console.log
let bills = document.querySelector('.bills');
// bills = Array.from(bills)
// let x = parseFloat(bills[0].value)
// cl(x)
let custom = document.querySelector('.custom');
let people = document.querySelector('.people');
let reset = document.querySelector('.reset');
reset.style.cursor = 'pointer'
let btn_1 = document.querySelector('.btn-1');
let btn_2 = document.querySelector('.btn-2');
let btn_3 = document.querySelector('.btn-3');
let btn_4 = document.querySelector('.btn-4');
let btn_5 = document.querySelector('.btn-5');
let tip_amount = document.querySelector('.price-1')
let tip_total = document.querySelector('.price-2')
let input = document.getElementsByTagName("input");
let error = document.querySelector('.error')
let btn = document.querySelectorAll('button.btn')
btn = Array.from(btn)
let tipFn_5 = () => {
    let tipAmount = (bills.value * btn[0].value / 100) / people.value
    tipAmount = tipAmount.toFixed(2)
    tip_amount.innerHTML = `$ ${tipAmount}`
    let tipTotal = (bills.value * btn[0].value / 100) + parseFloat(bills.value)
    tipTotal = (tipTotal / people.value).toFixed(2)
    tip_total.innerHTML = `$ ${tipTotal}`
}
let tipFn_10 = () => {
    let tipAmount = (bills.value * btn[1].value / 100) / people.value
    tipAmount = tipAmount.toFixed(2)
    tip_amount.innerHTML = `$ ${tipAmount}`
    let tipTotal = (bills.value * btn[1].value / 100) + parseFloat(bills.value)
    tipTotal = (tipTotal / people.value).toFixed(2)
    tip_total.innerHTML = `$ ${tipTotal}`
}
let tipFn_15 = () => {
    let tipAmount = (bills.value * btn[2].value / 100) / people.value
    tipAmount = tipAmount.toFixed(2)
    tip_amount.innerHTML = `$ ${tipAmount}`
    let tipTotal = (bills.value * btn[2].value / 100) + parseFloat(bills.value)
    tipTotal = (tipTotal / people.value).toFixed(2)
    tip_total.innerHTML = `$ ${tipTotal}`
}
let tipFn_25 = () => {
    let tipAmount = (bills.value * btn[3].value / 100) / people.value
    tipAmount = tipAmount.toFixed(2)
    tip_amount.innerHTML = `$ ${tipAmount}`
    let tipTotal = (bills.value * btn[3].value / 100) + parseFloat(bills.value)
    tipTotal = (tipTotal / people.value).toFixed(2)
    tip_total.innerHTML = `$ ${tipTotal}`
}
let tipFn_50 = () => {
    let tipAmount = (bills.value * btn[4].value / 100) / people.value
    tipAmount = tipAmount.toFixed(2)
    tip_amount.innerHTML = `$ ${tipAmount}`
    let tipTotal = (bills.value * btn[4].value / 100) + parseFloat(bills.value)
    tipTotal = (tipTotal / people.value).toFixed(2)
    tip_total.innerHTML = `$ ${tipTotal}`
}
let customTip = () => {
    let tipAmount = (bills.value * custom.value / 100) / people.value
    tipAmount = tipAmount.toFixed(2)
    tip_amount.innerHTML = `$ ${tipAmount}`
    let tipTotal = (bills.value * custom.value / 100) + parseFloat(bills.value)
    tipTotal = (tipTotal / people.value).toFixed(2)
    tip_total.innerHTML = `$ ${tipTotal}`
}


function check() {
    if (people.value == 0 || undefined) {
        error.innerHTML = "This can't be zero"
        error.style.color = 'red'
        error.style.margin = '1rem'
        error.style.fontSize = '1.5rem'
        tip_amount.innerHTML = '$0.00'
        tip_total.innerHTML = '$0.00'
    } else {
        error.style.display = 'none'
    }
}
let resetBtn = () => {
    bills.value = 0;
    people.value = 0;
    tip_amount.innerHTML = '$0.00'
    tip_total.innerHTML = '$0.00'
    custom.placeholder = 'custom'
}

reset.addEventListener('click', resetBtn)
btn_1.addEventListener('click', check)
btn_1.addEventListener('click', tipFn_5)
btn_2.addEventListener('click', check)
btn_2.addEventListener('click', tipFn_10)
btn_3.addEventListener('click', check)
btn_3.addEventListener('click', tipFn_15)
btn_4.addEventListener('click', check)
btn_4.addEventListener('click', tipFn_25)
btn_5.addEventListener('click', check)
btn_5.addEventListener('click', tipFn_50)
custom.addEventListener('blur', check)
custom.addEventListener('blur', customTip)