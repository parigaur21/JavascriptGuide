const score = 400;
console.log(score);
const balance = new Number(100);
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(2)); //precision value 
console.log(balance.valueOf());
const oldNum = 123456789;
console.log(oldNum.toLocaleString('en-IN')); //localization
const newNum = 123456789.123456789;
console.log(newNum.toPrecision(5)); //total number of digits



//************MATHS***************/
console.log(Math.PI);
console.log(Math.round(2.4));
console.log(Math.round(2.6));
console.log(Math.floor(2.9));
console.log(Math.ceil(2.1));
console.log(Math.sqrt(16));
console.log(Math.pow(2, 3));
console.log(Math.abs(-5));
console.log(Math.min(3, 1, 4, 2));
console.log(Math.max(3, 1, 4, 2));
console.log(Math.random()); //0 to 1
console.log(Math.floor(Math.random() * 10) + 1); //1 to 10