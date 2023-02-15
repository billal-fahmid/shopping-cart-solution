function getTotalElementById(id){
    const totalElementPrice =document.getElementById(id);
    const totalPriceValue = parseInt(totalElementPrice.innerText);
    return totalPriceValue;
}
function setSubTotalOrTexOrTotalElement(element,value){
    const subTotalElement = document.getElementById(element);
    subTotalElement.innerText = value;
}

// calculate the subtotal set the sub total value 
function calculateSubTotal(){
    const phoneTotal = getTotalElementById('phone-total-price');
    const caseTotal = getTotalElementById('case-total-price');

    const currentSubToTal = phoneTotal + caseTotal;
    setSubTotalOrTexOrTotalElement('sub-total',currentSubToTal);

    // text calculate 
    const texAmountString = (currentSubToTal * .1).toFixed(2);
    const texAmountValue =parseFloat(texAmountString)
    setSubTotalOrTexOrTotalElement('tex-amount',texAmountValue);

    // final Amount 
    const finalAmount = currentSubToTal + texAmountValue;
    setSubTotalOrTexOrTotalElement('final-total' , finalAmount)
}