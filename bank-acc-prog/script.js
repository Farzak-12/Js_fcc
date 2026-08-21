class BankAccount{
    constructor(){
        this.balance = 0;
        this.transactions = [];
    }

    deposit(amount){
        if(amount > 0){
            this.transactions.push({
                type: "deposit",
                amount: amount,
            })
            this.balance += amount;
            return `Successfully deposited $${amount}. New balance: $${this.balance}`
        }
        return "Deposit amount must be greater than zero.";
    }

    withdraw(amount){
        if(amount <= this.balance && amount > 0){
            this.transactions.push({
                type: "withdraw",
                amount: amount,
            })
            this.balance -= amount;
            return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
        }
        return "Insufficient balance or invalid amount.";
    }

    checkBalance(){
        return `Current balance: $${this.balance}`;
    }

    listAllDeposits(){
        const amounts = this.transactions.filter((trans) => trans.type === "deposit").map(deposit => deposit.amount);
        return `Deposits: ${amounts.join(",")}`
    }
    listAllWithdrawals(){
        const amounts = this.transactions.filter((trans) =>trans.type ===  "withdraw").map(withdraw => withdraw.amount);
        return `Withdrawals: ${amounts.join(",")}`
    }
}

const myAccount = new BankAccount();
console.log(myAccount.deposit(50));
console.log(myAccount.withdraw(20));
console.log(myAccount.deposit(30));
console.log(myAccount.deposit(200));
console.log(myAccount.withdraw(50));
console.log(myAccount.checkBalance());
console.log(myAccount.listAllDeposits());
console.log(myAccount.listAllWithdrawals());



