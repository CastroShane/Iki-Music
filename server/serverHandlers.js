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
};
