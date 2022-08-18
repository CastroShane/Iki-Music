const fetch = require("node-fetch");
// // use this package to generate unique ids: https://www.npmjs.com/package/uuid
// const { v4: uuidv4 } = require("uuid");
const { startClient, sendResponse } = require("./utils.js");

const getGenres = async (req, res) => {
  // Returns all Genres
  const url = "https://api.deezer.com/genre";
  try {
    const response = await fetch(url);
    const jsonData = await response.json();
    return res.status(200).json({ status: 200, data: jsonData });
  } catch (err) {
    console.log(err);
  }
};

const getEditorial = async (req, res) => {
  // Returns four lists : Top track, Top album, Top artist and Top playlist.
  const url = "https://api.deezer.com/editorial/0/charts";
  try {
    const response = await fetch(url);
    const jsonData = await response.json();
    return res.status(200).json({ status: 200, data: jsonData });
  } catch (err) {
    console.log(err);
  }
};

const getNewReleases = async (req, res) => {
  // This method returns the new releases per genre
  const url = "https://api.deezer.com/editorial/0/releases";
  try {
    const response = await fetch(url);
    const jsonData = await response.json();
    return res.status(200).json({ status: 200, data: jsonData });
  } catch (err) {
    console.log(err);
  }
};

// Test MongoDb
const testDB = async (req, res) => {
  try {
    const db = await startClient();
    const allUsers = await db.collection("users").find().toArray();
    sendResponse(res, 200, allUsers, "These are the users");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getGenres, getEditorial, getNewReleases, testDB };
