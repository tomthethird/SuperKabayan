//add condition to check if the files exist, if not, place static value or don't show cards.

//EMERGENCY FUND
let efGoal = emergencyFund.goal;
let efMonth = emergencyFund.month;
let efDeposits = emergencyFund.deposit;
let efResult = 0;
for (let deposit of efDeposits) {
  efResult += deposit;
}
efDeposits = efResult;

let efPercent = Math.round((efDeposits/efGoal)*100);

document.getElementById("efTarget").innerHTML = `${efMonth} Months`;
document.getElementById("efGoal").innerHTML = `Php ${Comma(efGoal)}`;
document.getElementById("efPercent").innerHTML = `${efPercent}%`;
document.getElementById("efDeposit").innerHTML = `Php ${Comma(efDeposits)}`;

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