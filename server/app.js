const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const app = express()
const uri = `mongodb+srv://stuStore:VXTomQtNdUF7POjC@cluster0.6v5oj5d.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true,});
console.log(uri);
let studentCollection;


async function connectToDatabase() {
  try {
    await client.connect();
    const database = client.db('stuStore');
    studentCollection = database.collection('studentsCollection');


    app.get('/tes',async (req, res) => {
        const query = {}
        const result = await studentCollection.find(query).toArray()
        res.send(result)
    })
    console.log('Connected to the database');
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1);
  }
}

connectToDatabase();

module.exports = {
  studentCollection,
 
  client,
};
