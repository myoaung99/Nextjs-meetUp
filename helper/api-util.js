import { MongoClient } from "mongodb";

export const connectDataBase = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://myomyintaung:myomyintaung2112@cluster0.s2cmo.mongodb.net/?retryWrites=true&w=majority"
  );

  console.log("Connected successfully to server");

  return client;
};

export const insertDocument = async (client, document) => {
  const db = client.db("meetups");
  const result = await db.collection("meetups").insertOne(document);

  return result;
};

export const getAllDocument = async (client, sort = { _id: 1 }) => {
  const db = client.db("meetups");
  const collection = db.collection("meetups");

  const document = await collection.find().sort(sort).toArray();

  const transformedDocument = document.map((doc) => ({
    id: doc._id.toString(),
    title: doc.title,
    image: doc.image,
    description: doc.description,
    address: doc.address,
  }));

  return transformedDocument;
};

export const getSelectedMeetUp = async (meetups, id) => {
  return await meetups.find((meetup) => meetup.id === id);
};
