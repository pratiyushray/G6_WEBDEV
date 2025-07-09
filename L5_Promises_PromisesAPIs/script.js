// // const myPromise1 = new Promise((resolve, reject) => {
// //     reject("Punal not Got the Placement");

// // });

// //1. Withdraw Salary _> 2. Work 9-5 => Weekend -> Learning New Tech => 4 Sleep Layoff 

// // const data = myPromise
// // .then((res)=> console.log(res))
// // .then(
// //   console.log("Punal Getting 1CR")
// // )
// // .catch((err)=> console.log(err))
// // .then(
// //   console.log("Punal Working 9- 5")
// // )
// // .catch((err)=> console.log(err))
// // .then(
// //   console.log("Layoff")
// // )
// // .catch((err)=> console.log(err));

// // console.log(data);

// // const myPromise1 = new Promise((resolve, reject) => {
// //     resolve("Punal not Got the Placement");

// // });

// // const myPromise2 = new Promise((resolve, reject) => {
// //     resolve("Punal got 1 CR Package");

// // });

// // const myFinalData2 = myPromise2.then((res)=> console.log(res))
// // const myFinalData = myPromise1.then((res)=> console.log(res))


// const promise1 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     reject("PROMISE 2 REJECT");
    
//   },3000)
// });

// const promise2 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     reject("PROMISE 2 REJECT");
//   },2000)
// });

// const promise3 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//         reject("PROMISE 2 REJECT");

//   },5000)
// });

// const promise4 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//         reject("PROMISE 2 REJECT");

//   },6000)
// });

// // Promise.all([promise1,promise2,promise3,promise4])
// // Promise.allSettled([promise1,promise2,promise3,promise4])
// // Promise.race([promise1,promise2,promise3,promise4])
// // Promise.any([promise1,promise2,promise3,promise4])


// //1 ALL RESOLVE
// // 2. ALL REJECT 
// // 3. 2 Resolve REJECT 


// // Promise.all([promise1,promise2,promise3,promise4])
// // .then((data)=> console.log(data))
// // .catch((err)=> console.log(err))


// // Promise.allSettled([promise1,promise2,promise3,promise4])
// // .then((data)=> console.log(data))
// // .catch((err)=> console.log(err))

// // All -  SAARE SUCCESS HUE TO ARRAY OF OUTPUT
// // ALL - REJECT ONE THEN REJECTION FOR ALL

// //ALL SETTLED - 



// // Promise.race([promise1,promise2,promise3,promise4])
// // .then((data)=> console.log(data))
// // .catch((err)=> console.log(err))

// // ALL SUCCESS: THE FASTEST ONE
// // KOI EK REJECT: JO BHI FASTEST RESOLVE OR RJECT

// Promise.any([promise1,promise2,promise3,promise4])
// .then((data)=> console.log(data))
// .catch((err)=> console.log(err))

// //JO BHI PEHLE FULFILL HOGYA


//////////////////////////////

// const promise1 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("PROMISE 1");
    
//   },3000)
// });

// promise1.then((res)=> console.log(res))
// .then(()=> {
//   setTimeout(()=>{
//     console.log("P2")
//   },4000)
// })
// .then(()=> {
//   setTimeout(()=>{
//     console.log("P3")
//   },1000)
// })
// .catch((err)=> console.log("error:",err))


// function somethingSomething(messageWork,delay){
//   return new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("PROMISE: "+ messageWork);
//     console.log("PROMISE: "+ messageWork);
    
//   },delay)
// })
// }
// const promise1 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("PROMISE 1");
//     console.log("PROMISE 1");
    
//   },6000)
// });
// promise1.then(()=>{
//   return somethingSomething("PRomise2", 5000)
// })
// .then(()=>{
//   return somethingSomething("PRomise3", 3000)
// })
// .then(()=>{
//   return somethingSomething("PRomise4", 2000)
// })
// .catch((err)=> console.log("Error",err))


// const promise1 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("PROMISE 1");
//     console.log("PROMISE 1");
    
//   },4000)
// });

// const promise2 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("PROMISE 1");
//     console.log("PROMISE 1");
    
//   },4000)
// });

// const promise3 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("PROMISE 1");
//     console.log("PROMISE 1");
    
//   },4000)
// });
// const promise4 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("PROMISE 1");
//     console.log("PROMISE 1");
    
//   },4000)
// });


// Promise.all([promise1,promise2,promise3,promise4])
// Promise.allSettled([promise1,promise2,promise3,promise4])
// Promise.race([promise1,promise2,promise3,promise4])
// Promise.any([promise1,promise2,promise3,promise4])

//1. IF ALL RESOLVE :
// 2. IF ALL REJECT:
// 3. IF ANY ONE REJECT 2000 --3000-4000

//////////////////////////////////////

// const assignmentByRachit = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("Assignment Completed");
//     // console.log("Assignment Completed");
    
//   },4000)
// });

// async function assignmentEvaluation(){
//     var assignmentDetail = await assignmentByRachit;
//     console.log("assignment Checking", assignmentDetail);
// }

// assignmentEvaluation();


// async function apiData(){
//   try{
//     const data =await fetch('https://dummyjson.com/users')
//   const myData =data.json();
//   console.log(myData);
//   }
//   catch(err){
//     console.log("error",err);
//   }
// }

// apiData();




///////////////////////////////////

// call()

// function assignmentSubmissionData(roomNo,groupId){
//   console.log(`Student Name: ${this.studentName} from Batch ${this.batchNo} : ${roomNo} : ${groupId}`)
// }

// const student1 = {
//   studentName: "Abhishek",
//   batchNo: "G5"
// }

// const student2 = {
//   studentName: "Rachit",
//   batchNo: "G6"
// }

// assignmentSubmissionData.call(student1,"PH10","XYZ");
// assignmentSubmissionData.call(student2,"PH10","XYZ");


// call()

// function assignmentSubmissionData(roomNo,groupId){
//   console.log(`Student Name: ${this.studentName} from Batch ${this.batchNo} : ${roomNo} : ${groupId}`)
// }

// const student1 = {
//   studentName: "Abhishek",
//   batchNo: "G5"
// }

// const student2 = {
//   studentName: "Rachit",
//   batchNo: "G6"
// }

// assignmentSubmissionData.apply(student1,["PH10","XYZ"]);
// assignmentSubmissionData.apply(student2,["PH10","XYZ"]);


//bind()

// function assignmentSubmissionData(roomNo,groupId){
//   console.log(`Student Name: ${this.studentName} from Batch ${this.batchNo} : ${roomNo} : ${groupId}`)
// }

// const student1 = {
//   studentName: "Abhishek",
//   batchNo: "G5"
// }

// const student2 = {
//   studentName: "Rachit",
//   batchNo: "G6"
// }

// const data1 =assignmentSubmissionData.bind(student1,"PH10","XYZ");
// const data2 =assignmentSubmissionData.bind(student2,"PH10","XYZ");
// data1();
// data2();