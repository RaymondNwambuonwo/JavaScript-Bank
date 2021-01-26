class SingleBankAccount {
    constructor(accountType, initialAmount) {
        this.accountType = accountType
        this.balance = initialAmount
    }


    deposit = (amount) => {
        this.balance += amount
        console.log(`You have deposited $${amount} into you ${this.accountType} account and its new balance is $${this.balance}`)
    }

    withdraw = (amount) => {
        this.balance -= amount
        console.log(`You have withdrawn $${amount} into you ${this.accountType} account and its new balance is $${this.balance}`)
    }

    checkBalance = () => {
        console.log(`Your ${this.accountType} account has a balance of $${this.balance}`)
    }
}

let checkingAccount = new SingleBankAccount('Checking Account', 1000)


class DualBankAccount {
    constructor(checkingAccountBalance, savingsAccountBalance) {
        this.checkingAccountBalance = checkingAccountBalance
        this.savingsAccountBalance = savingsAccountBalance
    }


    deposit = (amount, accountType) => {
        let account = this.accountType
            += amount
        console.log(`You have deposited $${amount} into you ${this.accountType} account and its new balance is $${this.balance}`)
    }

    withdraw = (amount, accountType) => {
        this.balance -= amount
        console.log(`You have withdrawn $${amount} into you ${this.accountType} account and its new balance is $${this.balance}`)
    }

    checkBalance = (accountType) => {
        console.log(`Your ${this.accountType} account has a balance of $${this.balance}`)
    }
}