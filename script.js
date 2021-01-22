// Grab deposit buttons from the DOM
const checkingWithdrawl = document.querySelector('#withdraw-checking')
const checkingDeposit = document.querySelector('#deposit-checking')

// Grab withdraw buttons from the DOM
const savingsWithdrawl = document.querySelector('#withdraw-savings')
const savingsDeposit = document.querySelector('#deposit-savings')

//Check buttons if working
console.log(checkingWithdrawl)
console.log(checkingDeposit)
console.log(savingsWithdrawl)
console.log(savingsDeposit)

// Users need to be able to deposit money into an account, savings and checking.
const deposit = [] //establish a variable with an empty array, this is what user will put in.

// Users need to be able to withdraw from savings and checking account
const withdraw = [] //establish a variable with an empty array, this is what user take out.

// Users need to be able to see their balance in their savings and checking account
const checkingBalance = document.querySelector('#checking-balance')
const savingsBalance = document.querySelector('#savings-balance')

//Check buttons if working
console.log(checkingBalance)
console.log(savingsBalance)




const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  // this creates language sensitive number formatting, this will allow users to enter in their proper currency. In this case it will be USD.
})



// Account cannot not be negative 



// Accounts that hit zero show a red 0




// Account needs to function independently 