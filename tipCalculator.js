tipPercentage = 0;
billAmount = 0;
noOfPerson = 0;

const numberOfPeople = document.getElementById("numPeople");
const bill = document.getElementById("billAmount");
const customTip = document.getElementById("custom");
const tipAmount = document.getElementById("outputPerPers");
const totalPerPers = document.getElementById("outputTotalPerPers");
// Error text
const errorMessage = document.getElementById("errorMessage");

numberOfPeople.addEventListener("keyup", (e) => {
    noOfPerson = e.target.value;
    if (noOfPerson == 0 || noOfPerson <= 0) {
        console.log("People cannot be 0");
        numberOfPeople.classList.add("error");
        numberOfPeople.classList.add("error:focus");
        errorMessage.style.visibility = "visible";
        return;
    } else {
        numberOfPeople.classList.remove("error");
        numberOfPeople.classList.remove("error:focus");
        errorMessage.style.visibility = "hidden";
        numberOfPeople.style.border = "1px solid var(--strong-cyan)";
        calculateTip();
    }
});

bill.addEventListener("keyup", (e) => {
    billAmount = e.target.value;
    console.log(billAmount);
    if (billAmount == 0 || billAmount <= 0) {
        console.log("People cannot be 0");
        bill.classList.add("error");
        bill.classList.add("error:focus");
        return;
    } else {
        bill.classList.remove("error");
        bill.style.border = "1px solid var(--strong-cyan)";
        calculateTip();
    }
});

customTip.addEventListener("keyup", (e) => {
    tipPercentage = e.target.value;
    console.log(tipPercentage);
    if (tipPercentage == 0 || tipPercentage <= 0) {
        console.log("People cannot be 0");
        customTip.classList.add("error");
        customTip.classList.add("error:focus");
        return;
    } else {
        customTip.classList.remove("error");
        calculateTip();
    }
});

const percent5 = document.getElementById("5");
percent5.addEventListener("click", (e) => {
    tipPercentage = e.target.value;
    console.log(tipPercentage);
    calculateTip();
});

const percent10 = document.getElementById("10");
percent10.addEventListener("click", (e) => {
    tipPercentage = e.target.value;
    console.log(tipPercentage);
    calculateTip();
});


const percent15 = document.getElementById("15");
percent15.addEventListener("click", (e) => {
    tipPercentage = e.target.value;
    console.log(tipPercentage);
    calculateTip();
});

const percent25 = document.getElementById("25");
percent25.addEventListener("click", (e) => {
    tipPercentage = e.target.value;
    console.log(tipPercentage);
    calculateTip();
});

const percent50 = document.getElementById("50");
percent50.addEventListener("click", (e) => {
    tipPercentage = e.target.value;
    console.log(tipPercentage);
    calculateTip();
});

const custom = document.getElementById("custom");
custom.addEventListener("click", (e) => {
    tipPercentage = e.target.value;
    console.log(tipPercentage);
    calculateTip();
});

function calculateTip() {
    if(noOfPerson && billAmount && tipPercentage) {
        const tip = ((billAmount * tipPercentage) / 100 / noOfPerson).toFixed(2);
        tipAmount.innerHTML = `$${tip}`;
        const billPerPerson = ((Number(billAmount) + Number(tip * 2)) / noOfPerson).toFixed(2);
        totalPerPers.innerHTML = `$${billPerPerson}`;
    }
};

const resetAll = document.getElementById("reset");

resetAll.addEventListener("click" , () => {
    resetTips();
});

function resetTips() {
    bill.value = null;
    numberOfPeople.value = null;
    customTip.value = null;
    tipPercentage = 0;
    billAmount = 0;
    noOfPerson = 0;
    tipAmount.innerHTML = `$0.00`;
    totalPerPers.innerHTML = `$0.00`;
};