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


// Establish a variable with an empty array, this is what user will put in.
const deposit = [] 

// Establish a variable with an empty array, this is what user take out.
const withdraw = [] 

// Users need to be able to see their balance in their savings and checking account
const checkingBalance = document.querySelector('#checking-balance')
const savingsBalance = document.querySelector('#savings-balance')

//Check buttons if working
console.log(checkingBalance)
console.log(savingsBalance)

// Create currency variable, this creates language sensitive number formatting, this will allow users to enter in their proper currency. In this case it will be USD.
const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
})



// Users need to be able to deposit money into checking account.
checkingDeposit.addEventListener('click', () => {

  // Use conditional to check if deposit is a number

})


// Users need to be able to deposit money into savings account.



// Users need to be able to withdraw money from savings and checking account.



// Account cannot not be negative 



// Accounts that hit zero show a red 0




// Account needs to function independently 