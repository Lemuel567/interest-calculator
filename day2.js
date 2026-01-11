import promptSync from 'prompt-sync';
const prompt = promptSync();

let principal = Number(prompt("Enter the principal amount : "));
let rate = Number(prompt("Enter the rate of interest : "));
let time = Number(prompt("Enter the num of years: "));

let interest = (principal * rate * time) / 100;
let totalAmount = principal + interest;


console.log("Simple Interest: " + interest);
console.log("Total Amount after " + time + " years: " + totalAmount)

