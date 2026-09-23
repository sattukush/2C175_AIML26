class BankAccount {

    constructor(accountNo, name, balance) {
        this.accountNo = accountNo;
        this.name = name;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient Balance");
        }
    }

    display() {
        console.log(this.accountNo);
        console.log(this.name);
        console.log(this.balance);
    }
}

let account = new BankAccount(101, "Satyam", 5000);

account.display();

account.deposit(2000);
account.withdraw(1000);

account.display();