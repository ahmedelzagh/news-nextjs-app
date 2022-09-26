import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(process.env.MONOGO_DB_NEWS_APP);
    const db = client.db();

    const newsCollection = db.collection("news");
    const result = await newsCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: "Done!" });
  }
}

export default handler;
