const inputBillAmount = document.querySelector("#bill-amt");
const inputCashGiven = document.querySelector("#cash-given");

const checkButton = document.querySelector("#check-btn");
const nextButton = document.querySelector("#next-btn");

const cashGivenSection = document.querySelector(".cashgiven-section");

const message = document.querySelector("#error-msg");

const outputDiv = document.querySelector("#output");
const table = document.querySelector(".table");

const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000,500,200,100,50,20,10,5,1];
 
inputBillAmount.addEventListener("click", function reset(){
    nextButton.style.display = "block";
    outputDiv.style.display= "none";
    cashGivenSection.style.display = "none";
})

nextButton.addEventListener("click", function nextStep(){
    inputCashGiven.value = "";
    var billAmount = Number(inputBillAmount.value);
    if(billAmount > 0){
        nextButton.style.display = "none";
        cashGivenSection.style.display = "block";
    }
    else{
        showMessage("Enter valid bill amount");
    }
});

checkButton.addEventListener("click", function validateCashHandler(){
    
    var billAmount = Number(inputBillAmount.value);
	var cashGiven = Number(inputCashGiven.value);

   if (billAmount > cashGiven) {
		showMessage("Insufficient Cash");
	} else if (billAmount == cashGiven) {
		showMessage("No cash to return");
	} else {
		returnCash(billAmount, cashGiven);
	}
    
});

function showMessage(text) {
    message.style.display = "block";
	message.innerText = text;	
}

function returnCash(bill,cash){
    var  returnChange = cash - bill;
    outputDiv.style.display= "block";
    for(var i = 0; i < availableNotes.length; i++)
    {
        var numberOfNotes = Math.trunc(returnChange / availableNotes[i]);
        returnChange =returnChange % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}