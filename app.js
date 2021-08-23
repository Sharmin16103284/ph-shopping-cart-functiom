// single function for both event
function updateCaseNumber(product, price , isIncreasingCase){
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = parseInt(caseInput.value);

    if(isIncreasingCase == true)
    {
        caseNumber = caseNumber + 1;
    }else if(caseNumber>0){
        caseNumber= caseNumber - 1;
    }
    caseInput.value = caseNumber;
    // case-Total
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = caseNumber * price;

    // calculateTotal
    calculateTotal();
    
}


// case increase and decrease
document.getElementById('case-plus').addEventListener('click' , function(){
    updateCaseNumber('case' , 50 , true);
})

document.getElementById('case-minus').addEventListener('click' , function(){    
    updateCaseNumber('case' , 50 , false);
})


// phone increase and decrease
document.getElementById('phone-plus').addEventListener('click' , function(){
    updateCaseNumber('phone' , 1000 , true);
})

document.getElementById('phone-minus').addEventListener('click' , function(){    
    updateCaseNumber('phone' , 1000 , false);
})


//update subtotoal
function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1000;
    const caseTotal = getInputValue('case') * 50;

    const subTotal = phoneTotal + caseTotal;

    const tax = subTotal / 10;

    const totalPrice = subTotal + tax;

    // update subtotal in html
    document.getElementById('sub-total').innerText = subTotal;

    document.getElementById('tax-amount').innerText = tax;

    document.getElementById('total-price').innerText = totalPrice;

} 





// different functions for both events

// phone casing
/* function updateCaseNumber(isIncreasingCase){
    const caseInput = document.getElementById('case-number');
    let caseNumber = parseInt(caseInput.value);

    if(isIncreasingCase == true)
    {
        caseNumber = caseNumber + 1;
    }else if(caseNumber>0){
        caseNumber= caseNumber - 1;
    }
    caseInput.value = caseNumber;
    // case-Total
    const caseTotal = document.getElementById('case-Total');
    caseTotal.innerText = caseNumber * 59;
    
}

document.getElementById('case-plus').addEventListener('click' , function(){
    updateCaseNumber(true);
})


document.getElementById('case-minus').addEventListener('click' , function(){    
    updateCaseNumber(false);
})

 */

// phone 

/* function updatePhoneNumber(isIncreasing){
    const phoneInput = document.getElementById('phone-number');
    let phoneNumber = parseInt(phoneInput.value);

    if(isIncreasing == true)
    {
        phoneNumber = phoneNumber + 1;
    }else if(phoneNumber>0){
        phoneNumber= phoneNumber - 1;
    }
    phoneInput.value = phoneNumber;
    // case-Total
    const phoneTotal = document.getElementById('phone-Total');
    phoneTotal.innerText = phoneNumber * 1212;
    
}

document.getElementById('phone-plus').addEventListener('click' , function(){
    updatePhoneNumber(true);
})


document.getElementById('phone-minus').addEventListener('click' , function(){    
    updatePhoneNumber(false);
})
 */

// end different function for both events
