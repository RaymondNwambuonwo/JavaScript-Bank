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
const userChecking = document.querySelector('#check-input')
const userSaving = document.querySelector('#saving-input')

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
  if (isNaN(userChecking.value)) {
    alert("Enter a number.")
    return userChecking.value = '';
  } else {
    //make condition for deposit to meet
    if (userChecking.value < 0.01 || userChecking.value > 100000.00) {
      alert("Give a penny or a million but nothing more or less!")
      return userChecking.value = '';
    } else {

      // Now use deposit variable with empty array to push value into.
      deposit.push(Number(userChecking.value));

      // Get Total Balance
      balance += (Number(userChecking.value))

      // format balance to show in money format
      let convertedBalance = currency.format(balance)
      document.querySelector("#checking-balance").innerHTML = convertedBalance;

      // console log deposit to see if worked
      console.log(`${userChecking.value}`)
      return userChecking.value = ''
    }
  }
})


// Users need to be able to deposit money into savings account.
savingsDeposit.addEventListener('click', () => {
  // Use conditional to check if deposit is a number
  if (isNaN(userSaving.value)) {
    alert("Enter a number")
    return userSaving.value = '';
  } else {
    //make condition for deposit to meet
    if (userSaving.value < 0.01 || userSaving.value > 1000000.00) {
      alert("Give a penny or a million but nothing more or less!")
      return userSaving.value = '';
    } else {

      // Now use deposit variable with empty array to push value into.
      deposit.push(Number(userSaving.value));

      // Get Total Balance
      balance += (Number(userSaving.value))

      // format balance to show in money format
      let convertedBalance = currency.format(balance)
      document.querySelector("#savings-balance").innerHTML = convertedBalance;

      // console log deposit to see if worked
      console.log(`${userSaving.value}`)
      return userSaving.value = ''
    }
  }
})


// Users need to be able to withdraw money from checking account.
checkingWithdrawl.addEventListener('click', () => {
  // Check if input is a number, same as above
  if (isNaN(userChecking.value)) {
    alert("Please enter a number")
    return userChecking.value = '';
  } else {

    // set condition that account cant go below $1
    if (userChecking.value > balance - 1) {
      alert("Your balance cannot drop below $1.")
      return userChecking.value = '';
    } else {

      // push to empty array withdraw
      withdraw.push(Number(userChecking.value));

      // total balance
      balance -= (Number(userChecking.value))

      // format to proper currency
      let convertedBalance = currency.format(balance);
      document.querySelector('#checking-balance').innerHTML = convertedBalance;

      // console out result and then return
      console.log(`${userChecking.value}`)
      return userChecking.value = ''
    }
  }
})



// Users need to be able to withdraw money from savings account
savingsWithdrawl.addEventListener('click', () => {
  // Check if input is a number, same as above
  if (isNaN(userSaving.value)) {
    alert("Please enter a number")
    return userSaving.value = '';
  } else {

    // set condition that account cant go below $1
    if (userSaving.value > balance - 1) {
      alert("Your balance cannot drop below $1.")
      return userSaving.value = '';
    } else {

      // push to empty array withdraw
      withdraw.push(Number(userSaving.value));

      // total balance
      balance -= (Number(userSaving.value))

      // format to proper currency
      let convertedBalance = currency.format(balance);
      document.querySelector('#savings-balance').innerHTML = convertedBalance;

      // console out result and then return
      console.log(`${userSaving.value}`)
      return userSaving.value = ''
    }
  }
})




