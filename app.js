const billAmount = document.querySelector("#bill-amount");
const paidByCustomer = document.querySelector("#cash-given");
const onClick = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

onClick.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  if (billAmount.value > 0) {
    if (paidByCustomer.value >= billAmount.value) {
      const toReturn = paidByCustomer.value - billAmount.value; 
      remainChange(toReturn);
    } else {
      showMessage("Table no 88 ke plate utha le");
    }
  } else {
    showMessage("kya bhai pani pine aaya tha kya");
  }
});

function remainChange(amountToBeReturned) {
 
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);

    amountToBeReturned = amountToBeReturned % availableNotes[i];

    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}