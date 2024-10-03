const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "bookMyShow";
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    //await client.connect();
    await mongoose.connect("mongodb://localhost:27017/bookMyShow")
    console.log("connected to server");
    // const db = client.db(dbName);
    // console.log(db);
   //s return db
  } catch (error) {
    console.log("Failed to connect to db", error);
    throw error
  }
};


module.exports = connectDB
