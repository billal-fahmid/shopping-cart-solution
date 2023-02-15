
function setPhoneField(isIncrease){
    const phoneFieldElement = document.getElementById('phone-field');
    const phoneFieldValue = parseInt(phoneFieldElement.value);
    let newPhoneFieldValue ;
    if(isIncrease){
        newPhoneFieldValue = phoneFieldValue + 1;
    }else{
        newPhoneFieldValue = phoneFieldValue - 1 ;
    }
    phoneFieldElement.value = newPhoneFieldValue;
    return newPhoneFieldValue;
}


function setTotalPhonePrice(trueOrFalse){
    const numberOfPhone = setPhoneField(trueOrFalse);
    const phoneTotalPrice = numberOfPhone * 1219 ;
    const setPhoneTotal = document.getElementById('phone-total-price');
    setPhoneTotal.innerText = phoneTotalPrice;
}


document.getElementById('btn-phone-plus').addEventListener('click' , function(){
    setTotalPhonePrice(true);
    calculateSubTotal();

})
document.getElementById('btn-phone-minus').addEventListener('click',function(){
    setTotalPhonePrice(false);
    calculateSubTotal();
})