const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();
const { MongoClient, ServerApiVersion, ConnectionCheckedInEvent, ObjectId } = require('mongodb');

app.use(cors())
app.use(express.json());



const uri = "mongodb+srv://Outshade-Digital-Media-JT:Y8HmDh9RgIDUPp4U@cluster0.x1j6m.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function runServer() {

    try {
        await client.connect();
        const AllProducts = client.db('outshade-digital-media-jt-db-products').collection('all-products');



        app.get('/allData', async (req, res) => {
            const query = {};
            const cursor = AllProducts.find(query);
            const services = await cursor.toArray();
            res.send(services);
        });


        app.get('/allData/:category', async (req, res) => {
            const category = req.params.category;
            const query = { Type: category };
            const cursor = AllProducts.find(query);
            const services = await cursor.toArray();
            res.send(services);
        });

        app.post('/addPro', async (req, res) => {
            const newPro = req.body;
            console.log(newPro);
            const result = await AllProducts.insertOne(newPro);
            res.send(result);
        });

        app.put('/updatePro/:id', async (req, res) => {
            const id = req.params.id;
            const updatePro = req.body;
            const find = { _id: ObjectId(id) };
            const updateDoc = {
                $set: {
                    Price: updatePro.Price
                },
            };
            const result = await AllProducts.updateOne(find, updateDoc);
            res.send(result)
        });

        app.put('/updateProType/:id', async (req, res) => {
            const id = req.params.id;
            const updateType = req.body.Type;
            const find = { _id: ObjectId(id) };
            const updateDoc = {
                $set: {
                    Type: updateType,
                },
            };
            const result = await AllProducts.updateOne(find, updateDoc);
            res.send(result)
        });


        app.delete('/deletePro/:id', async (req, res) => {
            const id = req.params.id; //getting id
            const query = { _id: ObjectId(id) };
            const result = await AllProducts.deleteOne(query);
            res.send(result);
        });


        app.delete('/deleteProAll/:category', async (req, res) => {
            const category = req.params.category;
            const query = { Type: category };
            const result = await AllProducts.deleteMany(query);
            res.send(result);
        });


    } finally {

    }

}

runServer().catch(console.dir);





app.get('/', (req, res) => {
    res.send({
        serverCreator: "Nishad",
        Contact: 'https://www.linkedin.com/in/nishadchowdhury/'
    })
})

app.listen(port, () => { console.log(`server is running ${port}`); })