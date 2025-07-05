
// //Callback Function

// console.log("START SCRIPT");

// function checkMenu(cb) {
//     console.log("I AM CHECKING MENU");
//     setTimeout(cb, 5000);
// }

// function orderFood(cb) {
//     console.log("I AM ORDERRING FOOD");
//     setTimeout(cb, 2000);
// }

// function orderServing(cb) {
//     console.log("I AM SERVING ORDER");
//     setTimeout(cb, 4000);
// }

// function eatingFood(cb) {
//     console.log("I AM EATING FOOD");
//     setTimeout(cb, 7000);
// }

// function billPay(cb) {
//     console.log("I AM PAYING BILL");
//     setTimeout(cb, 1000);
// }

// function exitRestaurant() {
//     setTimeout(() => {
//         console.log("I AM EXITING RESTAURANT");
//     }, 6000);
// }


// checkMenu(()=>{
//     orderFood(()=>{
//         orderServing(()=>{
//             eatingFood(()=>{
//                 billPay(()=>{
//                     exitRestaurant();
//                 })
//             })
//         })
//     })
// })


// console.log("CHECKING1");
// console.log("CHECKING 2");


// console.log("CHECKING 3")

// console.log("END OF SCRIPT");


// // ORDER PLACE FEATURE USING CALLBACK 

// var cart = ["shoes","watches"]
// function orderPlace(cart){
//     // 1. No of cart items
//     // 2. Total Price of Cart *1000
// }
// function orderGenerate(){
//     // random orderId 
// }
// function addressDetails(){
//     // name, adress,
// }
// function paymentGateway(){
//     // payment Successful of Order Id
// }

// function orderSummary(){
//     // orderId,
//     // name, Adrress,
//     // Payment status,
//     // Total Price,
//     // Order Info
// }

// MAP, FILTER,REDUCE

// const array1 = [1, 4, 9, 16];

// // Pass a function to map
// const map1 = array1.map((x) => x * 2);

// console.log(map1);
// Expected output: Array [2, 8, 18, 32]


var arr = [2,4,6,7,8,9,10];

// function calculateMap(arrUser){
//     let output = []

//     for(let i =0;i<arrUser.length;i++){
//         output.push(arrUser[i]*2);
//     }
//     return output;
// }

// const output = calculateMap(arr);

//  const map1 = array1.map((x) => x * 2);


// console.log(output);

// Array.prototype.calculate = function (logic){
//     let output = []
//     for(let i =0;i<this.length;i++){
//         output.push(logic(this[i]));
//     }
//     return output;
// }

// function doubleNum(x){
//     return x*2;
// }

// function triple(x){
//     return x*x*x
// }


// const finalOutput = arr.calculate(doubleNum);
// console.log(finalOutput);


// const finalOutput2 = arr.calculate(triple);
// console.log(finalOutput2);

// // FILTER PROTOTYPE

// Array.prototype.filterProto = function (logic){
//     let output = []
//     for(let i =0;i<this.length;i++){
//         if(logic(this[i])){
//             output.push(this[i])
//         }
//     }
//     return output;
// }

// REDUCE PROTOTYPE:


const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
const sumWithInitial = array1.reduce(
  function (acc,curr){
    acc =acc+curr;
    return acc
  }
  
);

console.log(sumWithInitial);
// Expected output: 10

