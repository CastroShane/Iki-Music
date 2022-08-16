const fetch = require("node-fetch");

const getGenres = async (req, res) => {
  // Returns all Genres
  const url = "https://api.deezer.com/genre";
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "65e7043693mshe3a4f0475a16f06p1f86bbjsndf1a9133840d",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    });
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
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "65e7043693mshe3a4f0475a16f06p1f86bbjsndf1a9133840d",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    });
    const jsonData = await response.json();
    return res.status(200).json({ status: 200, data: jsonData });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getGenres, getEditorial };
