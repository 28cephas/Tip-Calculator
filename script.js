const billInput = document.querySelector('.bill-input')
const numberInput = document.querySelector('.number-input')
const tipAmount = document.querySelector('#tip-amount')
const totalAmount = document.querySelector('.total-amount')
const tipPercent = document.querySelectorAll('.tip')
const reset = document.querySelector('.reset')
const custom = document.querySelector('.custom')

let tipValue = 15 / 100
let billVal = parseFloat(billInput.value)
let pplVal = parseFloat(numberInput.value)

billInput.addEventListener('input', billFunc)
numberInput.addEventListener('input', numFunc)

tipPercent.forEach(tip => {
    tip.addEventListener('click', selectedTip)
})

custom.addEventListener('input', () => {
    tipValue = (custom.value) / 100

    tipPercent.forEach(tip => {
        tip.classList.remove('active')
    })
    calculatedTip()
})

function billFunc() {
    billVal = parseFloat(billInput.value)
    calculatedTip()
}

function numFunc() {
    pplVal = numberInput.value
    calculatedTip()
    
}

function selectedTip(e) {
    tipPercent.forEach(tip => {
        tip.classList.remove('active')
        if(e.target.innerHTML == tip.innerHTML){
            tip.classList.add('active')
            tipValue = parseFloat(tip.innerHTML)/100
        }
    })
    calculatedTip()
}

function calculatedTip (){
    if(pplVal >= 1){
        let tipPerPerson = (billVal * tipValue) / pplVal;
        let total = (billVal + tipPerPerson) / pplVal
        tipAmount.innerHTML = '$' + tipPerPerson.toFixed(2);
        totalAmount.innerHTML = '$' + total.toFixed(2)
    }
    
}

reset.addEventListener('click', () => {
    billInput.value = '0.0'
    numberInput.value = '1'
    tipAmount.innerHTML = '$' + (0.00).toFixed(2)
    totalAmount.innerHTML = '$' + (0.00).toFixed(2)
})


