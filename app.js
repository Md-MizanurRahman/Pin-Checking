
// ____________Generating Pin__________
function getPin() {
    const pin = Math.round(Math.random() * 100000);
    const pinString = pin + '';
    if(pinString.length == 5){
        return pin;
    }
    else {
        return getPin();
    }
}
 
function generatingPin(){
    const pin = getPin();
    const displayPin = document.getElementById('display-pin');
    displayPin.value =pin;
}

// ____________Pin Checked______________________
function checkPin(){
    const originalPin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('display-number').value;
    let errorMassage = document.getElementById('error-massage');
    let successMassage = document.getElementById('success-massage');
    if(originalPin == typedPin){
        successMassage.style.display= 'block';
        errorMassage.style.display ='none';
    }
    else{
        errorMassage.style.display ='block';
        successMassage.style.display= 'none';
    }
}


// ____________Pin Typing_____________
document.getElementById('key-pad').addEventListener('click' , function(event){
    const number = event.target.innerText;
    let displayNumber =document.getElementById('display-number');
    if(isNaN(number)){
        if(number == 'C'){
            displayNumber.value ='';
        }
        else if (number == "<"){
            let currentDisplay=displayNumber.value;
            let lengthNo = currentDisplay.length;
            let newDisplay = currentDisplay.toString().slice(0, lengthNo-1);
            displayNumber.value = newDisplay;
        }
    }
    else{
        displayNumber.value= displayNumber.value + number;
    }
    
    
    
})