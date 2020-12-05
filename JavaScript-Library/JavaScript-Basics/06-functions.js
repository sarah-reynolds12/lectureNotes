//1        //2
function hello() {
    //3
    console.log("Hello World!");
}
hello();

function pacersWon(){
    console.log("Pacers won!");
}
pacersWon();
pacersWon();
pacersWon();

function numberEntered(num) {
    console.log("The number you entered was:", num);
}
numberEntered(5);
numberEntered(4);
numberEntered(3);

function addAnyTwoNumbers(x, y){
    console.log(x + y);
}
addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(12, 45);

function substractTwoNumbers(firstNum, secondNum){
    console.log(firstNum - secondNum);
}
substractTwoNumbers(5, 7);

function getMyBattingAverage(atBats, numberOfHits){
    let myAverage = numberOfHits / atBats;
    return myAverage;
}
console.log(getMyBattingAverage(250, 91));

function add(x, y){
    let sum = x + y;
    return sum;
}
console.log(add(1,1));

function myName(first, last){
    let wholename = first + " " + last;
    return wholename;
}
console.log(myName("Sarah", "Reynolds"));

   

function calculateTotalPrice(quantity, price){
    let totalPrice = 1.07 * quantity * price;
    return totalPrice;
}
console.log(calculateTotalPrice(17, 5));

function greet(name){
    return "hello " + name
};

var myName = "Jack";
result = greet(myName);
console.log(result);