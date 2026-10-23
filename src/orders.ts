import { MongoClient } from "mongodb";
const db = new MongoClient("mongodb://localhost").db("shop");
export const list = () => db.collection("orders").find({}).toArray();
export const create = (o: any) => db.collection("orders").insertOne(o);
