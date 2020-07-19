"use strict";
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};
const { DEPOSIT, WITHDRAW } = Transaction;
const account = {
  balance: 0,
  transactions: [],
  createTransaction(amount, type) {
    const id = this.transactions.length + 1;
    const transaction = {
      id,
      type,
      amount,
    };
    return transaction;
  },
  deposit(amount) {
    this.transactions.push(this.createTransaction(amount, DEPOSIT));
    this.balance += amount;
  },
  withdraw(amount) {
    if (amount > this.balance) {
      console.log(
        "Cнятие такой суммы не возможно, недостаточно средств на счету"
      );
      return;
    }
    this.transactions.push(this.createTransaction(amount, WITHDRAW));
    this.balance -= amount;
  },
  getBalance() {
    return this.balance;
  },
  getTransactionDetails(id) {
    for (const obj of this.transactions) {
      if (obj["id"] === id) {
        return obj;
      }
    }
  },
  getTransactionTotal(type) {
    const transactionTotal = this.transactions.reduce((sum, item) => {
      if (item.type === type) {
        sum += item.amount;
      }
      return sum;
    }, 0);
    return transactionTotal;
  },
};
account.deposit(300);
account.deposit(100);
account.deposit(150);
account.withdraw(50);
account.withdraw(200);
account.deposit(130);
account.withdraw(210);

// console.table(account.transactions);
// console.log(account.getBalance());
// console.table(account.getTransactionDetails(3));
// console.log(account.getTransactionTotal(DEPOSIT));
