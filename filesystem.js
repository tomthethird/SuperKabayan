let totalConversion = 50;

let fs = require('fs');
    fs.writeFile('emergencyFund2.js', `
        let efGoal = ${totalConversion};
        let efDeposit = 0;
        `, function (err) {
    if (err) throw err;
    console.log('Emergency Fund saved.');
});