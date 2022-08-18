"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const startClient = async () => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("Iki-Music");
  return db;
};

const sendResponse = (res, status, data, message = "No message included.") => {
  res.status(status).json({ status, data, message });
};

module.exports = {
  startClient,
  sendResponse,
};
