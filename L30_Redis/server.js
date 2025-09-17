const client = require("./client.js");


async function server(){
    const res1 = await client.set("bike:1", "Deimos");
    console.log(res1);  // OK
    const res2 = await client.get("bike:1");
    console.log(res2);  // Deimos
}

server();