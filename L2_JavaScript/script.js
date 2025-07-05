// console.log("SCRIPT STARTS");

// var a = 200;
// console.log(a);

// function abc(){
//     console.log("THIS IS FUNCTION ABC");
//     function def(){
//         console.log("THIS IS DEF FUNCTION");
//         function ghj(){
//             console.log("THIS IS GHJ");

//         }
//         ghj();
//     }
//     def();
// }
// abc();

{
    //compound statement
}

// function xyz(){
//     let a =100;
//     let b =200;
//     let c =300;
//     // console.log("THIS IS X",x);

//     function yuj(){
//         let x =900;
//         function abc(){
//             console.log(a);
//             console.log(b);
//             console.log(c);
//             console.log(x);
//         }
//         abc()
//     }
//     yuj()
// }
// xyz();

//CLOSURES

// setTimeout(()=>{
//     console.log("THIS IS SET TIMEOUT")
// },3000);


// for (var i =0; i<=5;i++){
//     //closure
//     function closureFunc(i){
//         setTimeout(()=>{
//         console.log(i)
//     },2000*i)
//     }
//     closureFunc(i)
// }


// function sumOfTwo(a,b){
//     return a+b;
// }

// function subOfTwo(a,b){
//     return a-b;
// }

// //HOF
// function calculate(logic,a,b){
//     return logic(a,b)
// } 

// var answerOfSubtraction = calculate(subOfTwo,10,4);
// console.log(answerOfSubtraction)


// function checkMenu(){
//     setTimeout(()=>{
//         console.log("I AM CHECKING MENU");
//     },5000)
// }

// checkMenu();

// function orderFood(){
//     setTimeout(()=>{
//         console.log("I AM ORDER THE FOOD");
//     },2000)
// }

// orderFood()

//Callback Function

console.log("START SCRIPT");

function checkMenu(cb) {
    console.log("I AM CHECKING MENU");
    setTimeout(cb, 5000);
}

function orderFood(cb) {
    console.log("I AM ORDERRING FOOD");
    setTimeout(cb, 2000);
}

function orderServing(cb) {
    console.log("I AM SERVING ORDER");
    setTimeout(cb, 4000);
}

function eatingFood(cb) {
    console.log("I AM EATING FOOD");
    setTimeout(cb, 7000);
}

function billPay(cb) {
    console.log("I AM PAYING BILL");
    setTimeout(cb, 1000);
}

function exitRestaurant() {
    setTimeout(() => {
        console.log("I AM EXITING RESTAURANT");
    }, 6000);
}


checkMenu(()=>{
    orderFood(()=>{
        orderServing(()=>{
            eatingFood(()=>{
                billPay(()=>{
                    exitRestaurant();
                })
            })
        })
    })
})


// console.log("CHECKING1");
// console.log("CHECKING 2");


// console.log("CHECKING 3")

console.log("END OF SCRIPT");
