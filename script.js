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

// Declare variable that allows to place input
const userCheckingDeposit = document.querySelector('#check-input')
const userSavingDeposit = document.querySelector('#saving-input')

// Declare balance variable 
let balance = 0;

// Create currency variable, this creates language sensitive number formatting, this will allow users to enter in their proper currency. In this case it will be USD.
const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
})



// Users need to be able to deposit money into checking account.
checkingDeposit.addEventListener('click', () => {
  // Use conditional to check if deposit is a number
  if (isNaN(userCheckingDeposit.value)) {
    alert("Enter a number.")
    return userCheckingDeposit.value = '';
  } else {
    //make condition for deposit to meet
    if (userCheckingDeposit.value < 0.01 || userCheckingDeposit.value > 1000000.00) {
      alert("Give a penny or a million but nothing more or less!")
      return userCheckingDeposit.value = '';
    } else {

      // Now use deposit variable with empty array to push value into.
      deposit.push(Number(userCheckingDeposit.value));

      // Get Total Balance
      balance += (Number(userCheckingDeposit.value))

      // format balance to show in money format
      let convertedBalance = currency.format(balance)
      document.querySelector("#checking-balance").innerHTML = convertedBalance;

      // console log deposit to see if worked
      console.log(`${userCheckingDeposit.value}`)
      return userCheckingDeposit.value = ''
    }
  }
})


// Users need to be able to deposit money into savings account.
savingsDeposit.addEventListener('click', () => {
  // Use conditional to check if deposit is a number
  if (isNaN(userSavingDeposit.value)) {
    alert("Enter a number.")
    return userSavingDeposit.value = '';
  } else {
    //make condition for deposit to meet
    if (userSavingDeposit.value < 0.01 || userSavingDeposit.value > 1000000.00) {
      alert("Give a penny or a million but nothing more or less!")
      return userSavingDeposit.value = '';
    } else {

      // Now use deposit variable with empty array to push value into.
      deposit.push(Number(userSavingDeposit.value));

      // Get Total Balance
      balance += (Number(userSavingDeposit.value))

      // format balance to show in money format
      let convertedBalance = currency.format(balance)
      document.querySelector("#savings-balance").innerHTML = convertedBalance;

      // console log deposit to see if worked
      console.log(`${userSavingDeposit.value}`)
      return userSavingDeposit.value = ''
    }
  }
})


// Users need to be able to withdraw money from savings and checking account.



// Account cannot not be negative 



// Accounts that hit zero show a red 0




// Account needs to function independently 