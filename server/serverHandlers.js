const fetch = require("node-fetch");

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

module.exports = { getGenres, getEditorial };
