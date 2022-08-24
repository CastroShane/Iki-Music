const fetch = require("node-fetch");
// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");
const {
  startClient,
  sendResponse,
  addUserDetails,
  getUsers,
  findUser,
  updateFavorite,
} = require("./utils.js");

/* -------- API Fetches --------   */

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

const getOneArtist = async (req, res) => {
  // This method returns data about the artist
  const { id } = req.params;
  const url = `https://api.deezer.com/artist/${id}`;
  try {
    const response = await fetch(url);
    const artistData = await response.json();
    sendResponse(res, 200, artistData);
    return;
  } catch (err) {
    console.log(err);
  }
};

const getArtistAlbums = async (req, res) => {
  // This method returns the artist's albums
  const { id } = req.params;
  const url = `https://api.deezer.com/artist/${id}/albums`;
  try {
    const response = await fetch(url);
    const artistData = await response.json();
    sendResponse(res, 200, artistData.data);
    return;
  } catch (err) {
    console.log(err);
  }
};

const getArtistRelated = async (req, res) => {
  // This method returns the artist's related
  const { id } = req.params;
  const url = `https://api.deezer.com/artist/${id}/related`;
  try {
    const response = await fetch(url);
    const artistData = await response.json();
    sendResponse(res, 200, artistData.data);
    return;
  } catch (err) {
    console.log(err);
  }
};

const getArtistTopSongs = async (req, res) => {
  // This method returns the artist's top songs
  const { id } = req.params;
  const url = `https://api.deezer.com/artist/${id}/top`;
  try {
    const response = await fetch(url);
    const artistData = await response.json();
    sendResponse(res, 200, artistData.data);
    return;
  } catch (err) {
    console.log(err);
  }
};

const getAlbum = async (req, res) => {
  // This method returns the albums's details
  const { id } = req.params;
  const url = `https://api.deezer.com/album/${id}`;
  try {
    const response = await fetch(url);
    const albumData = await response.json();
    sendResponse(res, 200, albumData);
    return;
  } catch (err) {
    console.log(err);
  }
};

const getPlaylist = async (req, res) => {
  // This method returns the playlist's details
  const { id } = req.params;
  const url = `https://api.deezer.com/playlist/${id}`;
  try {
    const response = await fetch(url);
    const albumData = await response.json();
    sendResponse(res, 200, albumData);
    return;
  } catch (err) {
    console.log(err);
  }
};

const getGenreArtists = async (req, res) => {
  // This method returns the genre's artist
  const { id } = req.params;
  const url = `https://api.deezer.com/genre/${id}/artists`;
  try {
    const response = await fetch(url);
    const albumData = await response.json();
    sendResponse(res, 200, albumData.data);
    return;
  } catch (err) {
    console.log(err);
  }
};

const searchForArtist = async (req, res) => {
  // This method returns the search results for artists
  const { q } = req.query;
  console.log("req.query:", req.query);
  console.log("query:", q);
  const url = `https://api.deezer.com/search?q=artist:${q}&limit=15`;
  try {
    const response = await fetch(url);
    const albumData = await response.json();
    sendResponse(res, 200, albumData.data);
    return;
  } catch (err) {
    console.log(err);
  }
};

const searchForAlbums = async (req, res) => {
  // This method returns the search results for albums
  const { q } = req.query;
  console.log("req.query:", req.query);
  console.log("query:", q);
  const url = `https://api.deezer.com/search?q=album:${q}&limit=15`;
  try {
    const response = await fetch(url);
    const albumData = await response.json();
    sendResponse(res, 200, albumData.data);
    return;
  } catch (err) {
    console.log(err);
  }
};

const searchForSongs = async (req, res) => {
  // This method returns the search results for songs
  const { q } = req.query;
  console.log("req.query:", req.query);
  console.log("query:", q);
  const url = `https://api.deezer.com/search?q=track:${q}&limit=15`;
  try {
    const response = await fetch(url);
    const albumData = await response.json();
    sendResponse(res, 200, albumData.data);
    return;
  } catch (err) {
    console.log(err);
  }
};

/* -------- MONGODB --------   */
const addNewUser = async (req, res) => {
  const { fullName, email, password } = req.body;
  const favorites = {
    songs: [],
    albums: [],
    playlists: [],
    artist: [],
  };
  try {
    const newUserDetails = {
      _id: uuidv4(),
      fullName,
      email,
      password,
      favorites,
    };

    const users = await getUsers();
    const foundUser = users.find((user) => user.email === email);

    if (foundUser) {
      sendResponse(res, 404, null, "User email already exists.");
      return;
    } else {
      await addUserDetails(newUserDetails);
    }

    sendResponse(
      res,
      201,
      newUserDetails,
      "User has been registered successfully."
    );
  } catch (err) {
    console.log(err);
  }
};

const verifyUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const foundUser = await findUser(email, password);

    if (foundUser) {
      sendResponse(res, 200, foundUser, "User verified.");
    } else {
      sendResponse(res, 200, foundUser, "Please check your email or password.");
    }
  } catch (err) {
    console.log(err);
  }
};

// If first time loggin in via Google, the data will be restore in Mongodb
const addGoogleUser = async (req, res) => {
  const { fullName, email, picture } = req.body;

  const favorites = {
    songs: [],
    albums: [],
    playlists: [],
    artist: [],
  };
  try {
    const newUserDetails = {
      _id: uuidv4(),
      fullName,
      email,
      picture,
      favorites,
    };

    const users = await getUsers();
    const foundUser = users.find((user) => user.email === email);

    if (foundUser) {
      sendResponse(res, 200, foundUser, "User email already exists.");
      return;
    } else {
      await addUserDetails(newUserDetails);
    }

    sendResponse(
      res,
      201,
      newUserDetails,
      "Google user has been added to the user list!"
    );
  } catch (err) {
    console.log(err);
  }
};

const updateFavorites = async (req, res) => {
  try {
    const { email, favorites } = req.body;

    const users = await getUsers();
    const foundUser = users.find((user) => user.email === email);

    if (foundUser) {
      updateFavorite(email, favorites);
      return sendResponse(
        res,
        200,
        favorites,
        "User favorites has been updated!"
      );
    } else {
      sendResponse(res, 404, null, "User not found!");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getGenres,
  getEditorial,
  getNewReleases,
  addNewUser,
  verifyUser,
  addGoogleUser,
  updateFavorites,
  getOneArtist,
  getArtistAlbums,
  getArtistRelated,
  getArtistTopSongs,
  getAlbum,
  getGenreArtists,
  getPlaylist,
  searchForArtist,
  searchForAlbums,
  searchForSongs,
};
