// const myPromise1 = new Promise((resolve, reject) => {
//     reject("Punal not Got the Placement");

// });

//1. Withdraw Salary _> 2. Work 9-5 => Weekend -> Learning New Tech => 4 Sleep Layoff 

// const data = myPromise
// .then((res)=> console.log(res))
// .then(
//   console.log("Punal Getting 1CR")
// )
// .catch((err)=> console.log(err))
// .then(
//   console.log("Punal Working 9- 5")
// )
// .catch((err)=> console.log(err))
// .then(
//   console.log("Layoff")
// )
// .catch((err)=> console.log(err));

// console.log(data);

// const myPromise1 = new Promise((resolve, reject) => {
//     resolve("Punal not Got the Placement");

// });

// const myPromise2 = new Promise((resolve, reject) => {
//     resolve("Punal got 1 CR Package");

// });

// const myFinalData2 = myPromise2.then((res)=> console.log(res))
// const myFinalData = myPromise1.then((res)=> console.log(res))


const promise1 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    reject("PROMISE 2 REJECT");
    
  },3000)
});

const promise2 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    reject("PROMISE 2 REJECT");
  },2000)
});

const promise3 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
        reject("PROMISE 2 REJECT");

  },5000)
});

const promise4 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
        reject("PROMISE 2 REJECT");

  },6000)
});

// Promise.all([promise1,promise2,promise3,promise4])
// Promise.allSettled([promise1,promise2,promise3,promise4])
// Promise.race([promise1,promise2,promise3,promise4])
// Promise.any([promise1,promise2,promise3,promise4])


//1 ALL RESOLVE
// 2. ALL REJECT 
// 3. 2 Resolve REJECT 


// Promise.all([promise1,promise2,promise3,promise4])
// .then((data)=> console.log(data))
// .catch((err)=> console.log(err))


// Promise.allSettled([promise1,promise2,promise3,promise4])
// .then((data)=> console.log(data))
// .catch((err)=> console.log(err))

// All -  SAARE SUCCESS HUE TO ARRAY OF OUTPUT
// ALL - REJECT ONE THEN REJECTION FOR ALL

//ALL SETTLED - 



// Promise.race([promise1,promise2,promise3,promise4])
// .then((data)=> console.log(data))
// .catch((err)=> console.log(err))

// ALL SUCCESS: THE FASTEST ONE
// KOI EK REJECT: JO BHI FASTEST RESOLVE OR RJECT

Promise.any([promise1,promise2,promise3,promise4])
.then((data)=> console.log(data))
.catch((err)=> console.log(err))

//JO BHI PEHLE FULFILL HOGYA