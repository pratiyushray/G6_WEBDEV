

// const https = require('node:https');
// const fs = require('node:fs');
// setTimeout(()=>{
//     console.log("THIS ST1")
// },0)
// fs.readFile('./something.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });
// setTimeout(()=>{
//     console.log("THIS ST1")
// },0)

// Promise.resolve("RESOLVE").then(console.log("PROMISe1"));
// setImmediate(()=>{
//     console.log("THIS IS SETIMMEDIATE")
// })
// process.nextTick(()=>{
//     console.log("THIS IS NEXT TICK")
// })
// https.get('https://encrypted.google.com/', (res) => {
//   console.log("API FETCHED");
//   setImmediate(()=>{
//     console.log("I AM HTTPS IMMEDIATE");
//   })
//   process.nextTick(()=>{
//     console.log("I AM HTTP NEXTTICK1")
//   })
// Promise.resolve("RESOLVE").then(console.log("PROMISe INNNER"));

// }).on('error', (e) => {
//   console.error(e);
// });
// Promise.resolve("RESOLVE").then(console.log("PROMISe2"));

// process.nextTick(()=>{
//     console.log("THIS IS NEXT TICK2")
// })
// Promise.resolve("RESOLVE").then(console.log("PROMISe3"));

// setTimeout(()=>{
//     console.log("THIS IS ST2");
// })



// setTimeout(()=>{
//     console.log("THIS IS ST")
// },2)

// setImmediate(()=>{
//     console.log("SET IMMEDIATE")
// })


///////////////////////////////////////////////////////

// const EventEmitter = require('node:events');

// const eventEmitter = new EventEmitter();


// eventEmitter.on('g6students', () => {
//   console.log('started');
// });

// eventEmitter.emit('g6students');



//////////////////////////////////


// DNS MODULE 


const dns = require('node:dns');

dns.lookup('chitkara.edu.in', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});
// address: "2606:2800:21f:cb07:6820:80da:af6b:8b2c" family: IPv6


// const dns = require('node:dns');

dns.resolve4('chitkara.edu.in', (err, addresses) => {
  if (err) throw err;

  console.log(`addresses: ${JSON.stringify(addresses)}`);

  addresses.forEach((a) => {
    dns.reverse(a, (err, hostnames) => {
      if (err) {
        throw err;
      }
      console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
    });
  });
});