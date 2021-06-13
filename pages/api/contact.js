import MongoClient from "mongodb";
const url = process.env.MONGO_URL;
export default async function (req, res) {
  if (req.method == "GET") {
    return res.status(200).json({ message: "Welcome to contact API" });
  }
  if (req.method == "POST") {
    console.log(req.body);
    const { email, name, message } = req.body;
    if (!email) {
      res.status(400).send({ message: "Please Provide a valid email" });
    }
    if (!name) {
      res.status(400).send({ message: "Please Provide a name" });
    }
    if (!message) {
      res.status(400).send({ message: "Please Provide a message" });
    }
    const messageByUser = {
      name: name,
      email: email,
      message: message,
    };
    try {
      const client = await MongoClient.connect(url);
      const db = client.db();
      const resp = await db.collection("message").insertOne(messageByUser);
      client.close();
      return res.status(202).json({ message: "Message sent successfully" });
    } catch (e) {
      return res.status(500).json({ message: "Interval Server error" });
    }
  }
}
