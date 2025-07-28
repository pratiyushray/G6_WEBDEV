const { MongoClient } = require('mongodb');
// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'G6_CHITKARA';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('students');

  const dataAdded = await collection.insertMany([
    {
        name:"Rachit",
        class: "G6",
        rollno: 21343215,
        skills: "DSA"
    },
    {
        name:"Pranav",
        class: "G5",
        rollno: 21343213,
        skills: "DSA"
    },
    {
        name:"Pransh",
        class: "G4",
        rollno: 21343211
    },
  ])
  console.log(dataAdded);

  // the following code examples can be pasted here...


  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());