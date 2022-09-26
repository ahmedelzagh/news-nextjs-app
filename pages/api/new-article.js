import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect("mongodb+srv://ahmed:BGuiep8nyWJPOz6H@cluster0.5sx13xz.mongodb.net/news-app?retryWrites=true&w=majority");
    const db = client.db();

    const newsCollection = db.collection("news");
    const result = await newsCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: "Done!" });
  }
}

export default handler;
