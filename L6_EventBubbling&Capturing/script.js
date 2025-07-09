console.log("SCRIPT START");

//CURRYING FUNCTION

// function sumOfthreeNumbers(a,b,c){
//     console.log(a+b+c);
//     return a+b+c;
// }

// sumOfthreeNumbers(2,4,6);

// // YOU GO TO SUBWAY:

// // 1.  CHOOSE THE BREAD : MulTIGRAIN/ GARLIC BREAD
// //2. CHOOSE THE PATTY: PANEER, ALOO, CHICKEN
// // 3. WANT CHEESE OR NOT 

// function subwayOrder(bread,patty,cheese){
//     console.log(`MY BREAD ${bread} with PATTY: ${patty} CHEESE: ${cheese}`);
// }

// subwayOrder("MULTIGRAIN","ALOO","WITH CHEESE")

// //CURRYING IN JS

// function subwayOrder2(bread){
//     return function (patty){
//         return function (cheese){
//             console.log(`MY BREAD ${bread} with PATTY: ${patty} CHEESE: ${cheese}`)
//         }
//     }
// }

// subwayOrder2("ORIGANO")("CHICKEN")("WITH CHEESE");


//EVENT LISTENERS

// const container1 = document.getElementById("container1");

// container1.addEventListener("click",()=>{
//     console.log("THIS IS THE CONTAINER 1")
// })


// const grandParent = document.getElementById("grandparent");
// const parent = document.getElementById("parent");
// const child = document.getElementById("child");

// grandParent.addEventListener('click',()=>{
//     console.log("RED DIV CALLED");
// },true)


// parent.addEventListener('click',()=>{
//     console.log("GREEN DIV CALLED")
// },true)

// child.addEventListener('click',()=>{
//     console.log("BLUE DIV CALLED")
// },true)


//EVENT DELEGATIONS IN JS

// const unorderedList = document.getElementById("navbar");

// unorderedList.addEventListener("click",(event)=>{
//     if (event.target.tagName === "LI"){
//         console.log(event.target.textContent);
//     }
// })


// ///LETS ADDD NEW ITEM

// const newElement = document.createElement("li");
// newElement.innerText = "Navbar"
// unorderedList.appendChild(newElement);


// const data =await fetch('https://dummyjson.com/products')