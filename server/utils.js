"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const startClient = async () => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    return client;
  } catch (err) {
    console.log(err);
  }
};

const sendResponse = (res, status, data, message = "No message included.") => {
  res.status(status).json({ status, data, message });
};

const addUserDetails = async (newUserDetails) => {
  try {
    const client = await startClient();
    const db = client.db("Iki-Music");
    await db.collection("users").insertOne(newUserDetails);
    client.close();
    return;
  } catch (err) {
    console.log(err);
  }
};

const getUsers = async () => {
  try {
    const client = await startClient();
    const db = client.db("Iki-Music");
    const users = await db.collection("users").find().toArray();
    client.close();
    return users;
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  startClient,
  sendResponse,
  getUsers,
  addUserDetails,
};
