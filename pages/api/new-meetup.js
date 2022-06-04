import { MongoClient } from 'mongodb';


async function handler(req, res) {

    if (req.method === "POST") {
        const data = req.body
        const client = await MongoClient.connect('mongodb+srv://divyansh:developer@neog-cluster.j0bu3.mongodb.net/meetup')
        const db = client.db();
        const meetupsCollection = db.collection('meetups')
        const result = await meetupsCollection.insertOne(data)
        client.close();
        res.status(201).json({message:"Meetup inserted"});
    }


}
export default handler;