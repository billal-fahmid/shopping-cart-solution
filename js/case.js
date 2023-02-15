function setCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-field');
    const previousCaseNumber = parseInt(caseNumberField.value);
    let newCaseNumber ;
    if(isIncrease){
        newCaseNumber =previousCaseNumber + 1 ;
    }else{
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber ;
}


function setCaseTotal(trueOrFalse){
    const newCaseNumber = setCaseNumber(trueOrFalse);
    const caseTotalPrice = newCaseNumber * 59 ;
    const caseTotalElement = document.getElementById('case-total-price');
    caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click' , function(){
        setCaseTotal(true);
        calculateSubTotal();


})
document.getElementById('btn-case-minus').addEventListener('click' , function(){
        setCaseTotal(false);
        calculateSubTotal();
   
})

