const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

require('dotenv').config()

app.use(cors())
app.use(express.json())




// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.6v5oj5d.mongodb.net/?retryWrites=true&w=majority`;
// console.log(uri);
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });




async function run() {

    try {
        console.log('START');
        //const collection = client.db('database name').collection('collection')
        
    }
    finally {
       
    }
}
run().catch(err => console.error(err))



app.get('/', (req, res) => {
    res.send('Porject Server is running!!')
})
app.listen(port, () => {
    console.log(`Project server is running on ${port}`)
})