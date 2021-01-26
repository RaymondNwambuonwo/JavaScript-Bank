class BankAccount {
    constructor() {
        this.checkingBalanceValue = 0;
        this.savingBalanceValue = 0;
        this.deposit = []
        this.withdraw = []

        this.savingsDeposit = document.querySelector('#deposit-savings')
        this.savingsWithdraw = document.querySelector('#withdraw-savings')
        this.savingsBalance = document.querySelector('#savings-balance')

        this.checkingWithdraw = document.querySelector('#withdraw-checking')
        this.checkingDeposit = document.querySelector('#deposit-checking')
        this.checkingBalance = document.querySelector('#checking-balance')

        this.currency = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
        })
    }


    addEventListenersToElements = () => {
        console.log(this)
        console.log('this works')
        this.savingsDeposit.addEventListener('click', this.checkIfNumberIsNaN)
        this.checkingWithdraw.addEventListener('click', this.withdrawFundsFromChecking)
        this.checkingDeposit.addEventListener('click', this.checkIfNumberIsNaN)
        this.savingsWithdraw.addEventListener('click', this.withdrawFundsFromSavings)
    }

    depositFundsIntoChecking = (e) => {
        console.log(e.target.value)
        // Use conditional to check if deposit is a number
        if (isNaN(this.userChecking.value)) {
            alert("Enter a number.")
            return this.userChecking.value = '';
        } else {
            //make condition for deposit to meet
            if (this.userChecking.value < 0.01 || this.userChecking.value > 100000.00) {
                alert("Give a penny or a million but nothing more or less!")
                return this.userChecking.value = '';
            } else {

                // Now use deposit variable with empty array to push value into.
                this.deposit.push(Number(this.userChecking.value));

                // Get Total Balance
                this.checkingBalanceValue += (Number(this.userChecking.value))

                // format balance to show in money format
                let convertedBalance = currency.format(checkingBalanceValue)
                document.querySelector("#checking-balance").innerHTML = convertedBalance;

                // console log deposit to see if worked
                console.log(`${this.userChecking.value}`)
                return this.userChecking.value = ''
            }
        }
    }

    depositFundsIntoSavings = () => {
        // Now use deposit variable with empty array to push value into.
        this.deposit.push(Number(this.userSaving.value));

        // Get Total Balance
        this.savingBalanceValue += (Number(this.userSaving.value))

        // format balance to show in money format
        let convertedBalance = currency.format(this.savingBalanceValue)
        document.querySelector("#savings-balance").innerHTML = convertedBalance;

        // console log deposit to see if worked
        console.log(`${this.userSaving.value}`)
        return this.userSaving.value = ''
    }

    checkIfNumberIsNaN = () => {
        // Use conditional to check if deposit is a number
        if (isNaN(this.userSaving.value)) {
            alert("Enter a number")
            return this.userSaving.value = '';
        } else {
            //make condition for deposit to meet
            if (this.userSaving.value < 0.01 || this.userSaving.value > 1000000.00) {
                alert("Give a penny or a million but nothing more or less!")
                return this.userSaving.value = '';
            } else {
                depositFundsIntoSavings()
            }
        }
    }



    withdrawFundsFromChecking = () => {
        // Check if input is a number, same as above
        if (isNaN(this.userChecking.value)) {
            alert("Please enter a number")
            return this.userChecking.value = '';
        } else {

            // set condition that account cant go below $1
            if (this.userChecking.value > this.checkingBalanceValue - 1) {
                alert("Your balance cannot drop below $1.")
                return this.userChecking.value = '';
            } else {

                // push to empty array withdraw
                withdraw.push(Number(this.userChecking.value));

                // total balance
                this.checkingBalanceValue -= (Number(this.userChecking.value))

                // format to proper currency
                let convertedBalance = currency.format(this.checkingBalanceValue);
                document.querySelector('#checking-balance').innerHTML = convertedBalance;

                // console out result and then return
                console.log(`${this.userChecking.value}`)
                return this.userChecking.value = ''
            }
        }
    }



    withdrawFundsFromSavings = () => {
        // Check if input is a number, same as above
        if (isNaN(this.userSaving.value)) {
            alert("Please enter a number")
            return this.userSaving.value = '';
        } else {

            // set condition that account cant go below $1
            if (this.userSaving.value > this.savingBalanceValue - 1) {
                alert("Your balance cannot drop below $1.")
                return this.userSaving.value = '';
            } else {

                // push to empty array withdraw
                withdraw.push(Number(this.userSaving.value));

                // total balance
                this.savingBalanceValue -= (Number(this.userSaving.value))

                // format to proper currency
                let convertedBalance = currency.format(this.savingBalanceValue);
                document.querySelector('#savings-balance').innerHTML = convertedBalance;

                // console out result and then return
                console.log(`${this.userSaving.value}`)
                return this.userSaving.value = ''
            }
        }
    }
}


let bankAccount = new BankAccount()

bankAccount.addEventListenersToElements()