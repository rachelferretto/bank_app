console.log('The money tree');
var balanceSavings = 0;
var balanceChecking = 0;
//button variables
var savingsDepositBtn = document.querySelector('.savings-dp-btn')
var savingsWithdrawalBtn = document.querySelector('.savings-wd-btn')
var checkingDepositBtn = document.querySelector('.checking-dp-btn')
var checkingWithdrawalBtn = document.querySelector('.checking-wd-btn')
//user input variables
var userInputSavings = document.querySelector('#amount-savings')
var userInputChecking = document.querySelector('#amount-checking')
var resultSavingsBal = document.querySelector('#savingsbal-div')
var resultCheckingBal = document.querySelector('#checkbal-div')



var deposit = function(amount, balance) {
  return balance + amount;
};

var withdrawal = function(amount, balance) {
  return balance - amount;
};

var alertNoFundsSavings = function() {
    document.querySelector('.savings').style.backgroundColor = 'black'
    document.querySelector('.savings').style.color = 'white'
    alert("You don't have enough funds for this transaction, try a smaller amount")
};

var alertNoFundsChecking = function() {
document.querySelector('.checking').style.backgroundColor = 'black'
document.querySelector('.checking').style.color = 'white'
alert("You don't have enough funds for this transaction, try a smaller amount")
};


savingsDepositBtn.addEventListener('click', function() {
  balanceSavings = deposit(Number(userInputSavings.value), balanceSavings);
  resultSavingsBal.textContent = '$' + balanceSavings;
  if (balanceSavings > 0.00) {
    document.querySelector('.savings').style.backgroundColor = '#709775'
    document.querySelector('.savings').style.color = 'black'
  };
});


savingsWithdrawalBtn.addEventListener('click', function() {
  balanceSavings = withdrawal(Number(userInputSavings.value), balanceSavings);
  if (balanceSavings < 0.00) {
    balanceSavings = 0;
    alertNoFundsSavings();
  };
  resultSavingsBal.textContent = '$' + balanceSavings;
});


checkingDepositBtn.addEventListener('click', function() {
  balanceChecking = deposit(Number(userInputChecking.value), balanceChecking);
  if (balanceChecking > 0.00) {
    document.querySelector('.checking').style.backgroundColor = '#C4DACF'
    document.querySelector('.checking').style.color = 'black'
  };
  resultCheckingBal.textContent = '$' + balanceChecking;
});


checkingWithdrawalBtn.addEventListener('click', function() {
  balanceChecking = withdrawal(Number(userInputChecking.value), balanceChecking);
  if (balanceChecking < 0.00) {
    balanceChecking = 0;
    alertNoFundsChecking();
  };
  resultCheckingBal.textContent = '$' + balanceChecking;
});
