let currencySymbol = "MOP$" //API
let currencyValue = 6.42 //API

let numMonth = 3;

function totalConversion () {
    let expensesAbroad = document.getElementById("expensesAbroad").value;
    let expensesPH = document.getElementById("expensesPH").value;
    let liabilities = document.getElementById("liabilities").value;

    let conversionValue = expensesAbroad * currencyValue;
    let total1 = parseFloat(conversionValue) + parseFloat(expensesPH) + parseFloat(liabilities);

    document.getElementById("conversion").innerHTML = `${currencySymbol} ${Comma(expensesAbroad)} ~ PHP ${Comma(conversionValue)}<br>Est. conversion at ${currencySymbol} 1 = PHP ${currencyValue}`;

    document.getElementById("conversionTotal").innerHTML = `PHP ${Comma(total1)}`;
    document.getElementById("totalFund").innerHTML = `PHP ${Comma(total1*numMonth)}`
    return total1*numMonth
}

function IncrementMonth() {
    if (numMonth < 6){
        numMonth += 1;
        totalConversion()
        document.getElementById("month").innerHTML = numMonth + " months";
    } else {
        document.getElementById("month").innerHTML = `${numMonth} months<br><h6>max of 6 mos.</h6>`;
    }
}

function DecrementMonth() {
    if (numMonth > 3) {
        numMonth -= 1;
        totalConversion()
        document.getElementById("month").innerHTML = numMonth + " months";
    } else {
        document.getElementById("month").innerHTML = `${numMonth} months<br><h6>min of 3 mos.</h6>`;
    }
}

function emergencyFile () {
    let expensesAbroad = document.getElementById("expensesAbroad").value;
    let expensesPH = document.getElementById("expensesPH").value;
    let liabilities = document.getElementById("liabilities").value;

    let conversionValue = expensesAbroad * currencyValue;
    let total1 = parseFloat(conversionValue) + parseFloat(expensesPH) + parseFloat(liabilities);
    let value = Math.round(total1*numMonth);

    const fs = require('fs');
    fs.appendFile('emergencySavingsFund.js',
        `let emergencyFund = 
        {
            goal: ${value},
            expUS: ${conversionValue},
            expPH: ${expensesPH},
            liab: ${liabilities},
            month: ${numMonth},
            convert: ${currencyValue},
            symbol: ${currencySymbol},
            deposit: [],
        };`
        , function (err) {
    if (err) throw err;
    console.log('Emergency Fund saved.');
});
}

let efButton = document.getElementById("efSubmit");
efButton.onclick = () => {
    emergencyFile();
}

function savingsFile () {
    let savingGoalName = document.getElementById("savingGoalName").value;
    let savingGoalAmount = document.getElementById("savingGoalAmount").value;

    savingsCount = savingList.length;

    const fs = require('fs');

    fs.appendFile('emergencySavingsFund.js',
        `let savings${savingsCount}Fund = 
        {
            name: ${savingGoalName},
            goal: ${savingGoalAmount},
            deposit: [],
        };`
        , function (err) {
    if (err) throw err;
    console.log('Emergency Fund saved.');
    });
    
    fs.appendFile('savingsCard.js',
        `document.getElementById("savingsContainer").innerHTML =
        \`<div class="p-3 snip-card rounded-4 mt-3" id="boxContainer">
            <h3 class="fw-bolder" id="savings${savingsCount}Name"></h3>
            <div class="progress rounded-5" style="height: 30px;">
            <div class="progress-bar bg-success" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="d-flex flex-wrap justify-content-between mt-3">
            <h5 id="savings${savingsCount}Deposit"></h5>
            <h5 id="savings${savingsCount}Goal"></h5>
            </div>
            <div class="mt-2 d-flex justify-content-end">
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Deposit</button>
            </div>
        </div>\``
        , function (err) {
    if (err) throw err;
    console.log('Saving card saved.');

});
}

let savingsButton = document.getElementById("savingsSubmit");
savingsButton.onclick = () => {
    savingsFile();
}

//SAVINGS
let savings1Name = savings1Fund.name;
let savings1Goal = savings1Fund.goal;
let savings1Deposit = savings1Fund.deposit;
let savings1Result = 0;
for (let deposit of savings1Deposit) {
  savings1Result += deposit;
}
savings1Deposit = savings1Result; 

let savings1Percent = Math.round((savings1Deposit/savings1Goal)*100);

document.getElementById("savings1Name").innerHTML = savings1Name.toUpperCase();
document.getElementById("savings1Goal").innerHTML = `Php ${Comma(savings1Goal)}`;
document.getElementById("savings1Deposit").innerHTML = `Php ${Comma(savings1Result)}`;
document.getElementById("savings1Percent").innerHTML = `${savings1Percent}%`;



function Comma(Num) { //function to add commas to textboxes
    Num += '';
    Num = Num.replace(',', ''); Num = Num.replace(',', ''); Num = Num.replace(',', '');
    Num = Num.replace(',', ''); Num = Num.replace(',', ''); Num = Num.replace(',', '');
    x = Num.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1))
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    return x1 + x2;
}